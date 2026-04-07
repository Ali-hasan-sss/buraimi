import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = (await request.json()) as {
            id?: string;
            titleAr?: string;
            titleEn?: string;
            descriptionAr?: string;
            descriptionEn?: string;
        };

        const programId = String(body.id || "").trim();
        const titleAr = String(body.titleAr || "").trim();
        const titleEn = String(body.titleEn || "").trim();
        const descriptionAr = String(body.descriptionAr || "").trim();
        const descriptionEn = String(body.descriptionEn || "").trim();

        if (!programId || !titleAr || !titleEn) {
            return NextResponse.json(
                { ok: false, message: "id, titleAr and titleEn are required" },
                { status: 400 }
            );
        }

        await dbConnect();

        const exists = await DepartmentModel.findOne(
            { _id: id, "programs.id": programId },
            { _id: 1 }
        ).lean();

        if (exists) {
            return NextResponse.json(
                { ok: false, message: "Program id already exists" },
                { status: 400 }
            );
        }

        await DepartmentModel.updateOne(
            { _id: id },
            {
                $push: {
                    programs: {
                        id: programId,
                        titleAr,
                        titleEn,
                        descriptionAr,
                        descriptionEn,
                        levels: [],
                        objective: { title: "", data: [] },
                        studyPlan: [],
                    },
                },
            }
        );

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
