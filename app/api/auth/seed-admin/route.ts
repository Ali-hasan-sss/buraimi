import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { User } from '@/models/User';

function getAdminEmails() {
    const raw = process.env.ADMIN_EMAILS || '';
    return raw
        .split(',')
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean);
}

export async function POST(request: Request) {
    const seedKey = process.env.ADMIN_SEED_KEY;
    if (!seedKey) {
        return NextResponse.json({ ok: false, message: 'Missing ADMIN_SEED_KEY' }, { status: 500 });
    }

    const providedKey = request.headers.get('x-seed-key') || '';
    if (providedKey !== seedKey) {
        return NextResponse.json({ ok: false, message: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const adminEmails = getAdminEmails();
    if (adminEmails.length === 0) {
        return NextResponse.json({ ok: false, message: 'Missing ADMIN_EMAILS' }, { status: 400 });
    }

    const adminEmail = adminEmails[0];
    const firstName = (process.env.ADMIN_FIRST_NAME || 'Admin').trim();
    const lastName = (process.env.ADMIN_LAST_NAME || 'User').trim();
    const age = Number(process.env.ADMIN_AGE || 30);

    const existing = await User.findOne({ email: adminEmail }).lean();
    if (existing) {
        return NextResponse.json({
            ok: true,
            message: 'Admin already exists',
            user: { email: existing.email, id: String(existing._id) },
        });
    }

    const created = await User.create({
        name: `${firstName} ${lastName}`,
        firstName,
        lastName,
        age: Number.isFinite(age) && age > 0 ? age : 30,
        email: adminEmail,
    });

    return NextResponse.json({
        ok: true,
        message: 'Admin seeded successfully',
        user: { id: created._id.toString(), email: created.email },
    });
}
