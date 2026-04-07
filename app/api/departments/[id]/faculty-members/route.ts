import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

type FacultyMemberDoc = {
    email: string;
    name: string;
    phone: string;
    position: string;
    title: string;
};

type MemberBody = {
    email?: string;
    name?: string;
    phone?: string;
    position?: string;
    title?: string;
};

function normEmail(e: string) {
    return e.trim().toLowerCase();
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = (await request.json()) as MemberBody;
        const email = normEmail(body.email || "");
        const name = body.name?.trim() || "";
        const phone = body.phone?.trim() || "";
        const position = body.position?.trim() || "";
        const title = body.title?.trim() || "";

        if (!email || !name) {
            return NextResponse.json({ ok: false, message: "Email and name are required" }, { status: 400 });
        }

        await dbConnect();

        const existing = await DepartmentModel.findById(id).lean();
        if (!existing) {
            return NextResponse.json({ ok: false, message: "Department not found" }, { status: 404 });
        }

        const members = (Array.isArray(existing.facultyMembers) ? existing.facultyMembers : []) as FacultyMemberDoc[];
        const dup = members.some((m) => normEmail(m.email || "") === email);
        if (dup) {
            return NextResponse.json({ ok: false, message: "A member with this email already exists" }, { status: 409 });
        }

        await DepartmentModel.findByIdAndUpdate(id, {
            $push: {
                facultyMembers: { email, name, phone, position, title },
            },
        });

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const { email, member } = (await request.json()) as {
            email?: string;
            member?: MemberBody;
        };

        const lookup = (email || "").trim();
        if (!lookup || !member) {
            return NextResponse.json({ ok: false, message: "email and member are required" }, { status: 400 });
        }

        await dbConnect();

        const dept = await DepartmentModel.findById(id);
        if (!dept) {
            return NextResponse.json({ ok: false, message: "Department not found" }, { status: 404 });
        }

        const list = (dept.facultyMembers || []) as FacultyMemberDoc[];
        const idx = list.findIndex((m) => normEmail(m.email) === normEmail(lookup));
        if (idx < 0) {
            return NextResponse.json({ ok: false, message: "Member not found" }, { status: 404 });
        }

        list[idx] = {
            ...list[idx],
            email: list[idx].email,
            name: member.name?.trim() || "",
            phone: member.phone?.trim() || "",
            position: member.position?.trim() || "",
            title: member.title?.trim() || "",
        };

        dept.facultyMembers = list as typeof dept.facultyMembers;
        await dept.save();

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const { searchParams } = new URL(request.url);
        const emailParam = searchParams.get("email")?.trim();

        if (!emailParam) {
            return NextResponse.json({ ok: false, message: "email query required" }, { status: 400 });
        }

        await dbConnect();

        const dept = await DepartmentModel.findById(id);
        if (!dept) {
            return NextResponse.json({ ok: false, message: "Department not found" }, { status: 404 });
        }

        const list = (dept.facultyMembers || []) as FacultyMemberDoc[];
        const next = list.filter((m) => normEmail(m.email) !== normEmail(emailParam));

        if (next.length === list.length) {
            return NextResponse.json({ ok: false, message: "Member not found" }, { status: 404 });
        }

        dept.facultyMembers = next as typeof dept.facultyMembers;
        await dept.save();

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
