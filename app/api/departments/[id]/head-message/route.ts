import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { writer, mail, phone, messageHtml } = (await request.json()) as {
            writer?: string;
            mail?: string;
            phone?: string;
            messageHtml?: string;
        };

        await dbConnect();

        await DepartmentModel.findByIdAndUpdate(id, {
            headMessage: {
                writer: writer || "",
                mail: mail || "",
                phone: phone || "",
                message: { __html: messageHtml || "" },
            },
        });

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
