import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import { User } from "@/models/User";
import { encrypt } from "@/lib/auth";

function getAdminEmails() {
  const raw = process.env.ADMIN_EMAILS || "";
  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export async function POST(request: Request) {
  await dbConnect();

  const body = (await request.json()) as {
    email?: string;
    password?: string;
  };

  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || "";

  if (!email || !password) {
    return NextResponse.json(
      { ok: false, message: "Missing email or password" },
      { status: 400 },
    );
  }

  const adminEmails = getAdminEmails();
  const adminAllowed = adminEmails.length === 0 || adminEmails.includes(email);
  if (!adminAllowed) {
    return NextResponse.json(
      { ok: false, message: "Unauthorized admin login" },
      { status: 403 },
    );
  }

  const user = await User.findOne({ email });
  if (!user?.password) {
    return NextResponse.json(
      { ok: false, message: "Invalid email or password" },
      { status: 401 },
    );
  }

  const passwordOk = await bcrypt.compare(password, user.password);
  if (!passwordOk) {
    return NextResponse.json(
      { ok: false, message: "Invalid email or password" },
      { status: 401 },
    );
  }

  const expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const session = await encrypt({ userId: user._id.toString(), email: user.email, expires });

  const res = NextResponse.json({ ok: true });
  res.cookies.set("session", session, {
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return res;
}
