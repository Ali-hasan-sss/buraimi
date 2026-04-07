import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

type Body =
    | { action: "add"; text: string }
    | { action: "update"; index: number; text: string }
    | { action: "delete"; index: number };

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        const body = (await request.json()) as Body;

        await dbConnect();

        const dept = await DepartmentModel.findOne(
            { _id: id, "programs.id": programId },
            { "programs.$": 1 }
        ).lean();

        const program = (dept as { programs?: Array<{ objective?: { data?: string[] } }> } | null)?.programs?.[0];
        const current = Array.isArray(program?.objective?.data) ? program!.objective!.data! : [];

        const next = [...current];

        if (body.action === "add") {
            const text = String(body.text || "").trim();
            if (text) next.push(text);
        } else if (body.action === "update") {
            const idx = Number(body.index);
            const text = String(body.text || "").trim();
            if (Number.isInteger(idx) && idx >= 0 && idx < next.length && text) {
                next[idx] = text;
            }
        } else if (body.action === "delete") {
            const idx = Number(body.index);
            if (Number.isInteger(idx) && idx >= 0 && idx < next.length) {
                next.splice(idx, 1);
            }
        }

        await DepartmentModel.updateOne(
            { _id: id, "programs.id": programId },
            { $set: { "programs.$.objective.data": next } }
        );

        return NextResponse.json({ ok: true, data: next });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
