import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        await dbConnect();
        await DepartmentModel.findByIdAndDelete(id);
        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
