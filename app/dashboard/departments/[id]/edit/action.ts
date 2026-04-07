"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { getFormDataString } from "@/lib/get-form-data-field";
import { DepartmentModel } from "@/models/Department";

export async function updateDepartment(id: string, formData: FormData) {
    const domain = getFormDataString(formData, "domain");
    const titleAr = getFormDataString(formData, "titleAr");
    const titleEn = getFormDataString(formData, "titleEn");
    const subTitleAr = getFormDataString(formData, "subTitleAr");
    const subTitleEn = getFormDataString(formData, "subTitleEn");
    const showcaseImage = getFormDataString(formData, "showcaseImage");

    const writer = getFormDataString(formData, "writer");
    const mail = getFormDataString(formData, "mail");
    const phone = getFormDataString(formData, "phone");
    const messageHtml = getFormDataString(formData, "messageHtml");

    if (!domain || !titleAr || !titleEn) {
        return;
    }

    await dbConnect();
    await DepartmentModel.findByIdAndUpdate(
        id,
        {
            $set: {
                domain,
                titleAr,
                titleEn,
                subTitleAr,
                subTitleEn,
                showcaseImage: showcaseImage || "",
                headMessage: {
                    writer,
                    mail,
                    phone,
                    message: { __html: messageHtml },
                },
            },
        },
    );

    revalidatePath("/dashboard/departments");
    revalidatePath("/main");
    redirect(`/dashboard/departments/${id}`);
}