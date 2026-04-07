import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        const { titleAr, titleEn, descriptionAr, descriptionEn } = (await request.json()) as {
            titleAr?: string;
            titleEn?: string;
            descriptionAr?: string;
            descriptionEn?: string;
        };

        await dbConnect();

        await DepartmentModel.updateOne(
            { _id: id, "programs.id": programId },
            {
                $set: {
                    "programs.$.titleAr": titleAr || "",
                    "programs.$.titleEn": titleEn || "",
                    "programs.$.descriptionAr": descriptionAr || "",
                    "programs.$.descriptionEn": descriptionEn || "",
                },
            }
        );

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
