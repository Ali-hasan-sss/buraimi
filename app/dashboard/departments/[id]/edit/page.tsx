import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RichTextInput from "@/components/dashboard/RichTextInput";
import { DepartmentDoc } from "@/types/dashboard";
import DepartmentShowcaseImageField from "@/components/dashboard/departments/DepartmentShowcaseImageField";
import EditDepartmentFormShell from "./EditDepartmentFormShell";





export default async function EditDepartmentPage({ params }: { params: Promise<{ id: string }> }) {
    const t = await getTranslations("dashboardDepartments");
    const { id } = await params;

    await dbConnect();
    const dept = (await DepartmentModel.findById(id).lean()) as DepartmentDoc | null;

    if (!dept) {
        notFound();
    }

    const head = dept.headMessage;

    return (
        <div className="max-w-2xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">{t("editTitle")}</h1>
                <p className="text-sm text-muted-foreground">{dept.titleAr}</p>
            </div>

            <EditDepartmentFormShell departmentId={id}>
                {/* General Info */}
                <fieldset className="space-y-4 rounded-xl border bg-background p-4">
                    <legend className="px-2 text-sm font-semibold text-muted-foreground">{t("form.generalInfo")}</legend>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="domain">{t("form.domain")}</label>
                        <Input id="domain" name="domain" defaultValue={dept.domain} required />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="titleAr">{t("form.titleAr")}</label>
                            <Input id="titleAr" name="titleAr" defaultValue={dept.titleAr} required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="titleEn">{t("form.titleEn")}</label>
                            <Input id="titleEn" name="titleEn" defaultValue={dept.titleEn} required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="subTitleAr">{t("form.subTitleAr")}</label>
                            <Input id="subTitleAr" name="subTitleAr" defaultValue={dept.subTitleAr} />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="subTitleEn">{t("form.subTitleEn")}</label>
                            <Input id="subTitleEn" name="subTitleEn" defaultValue={dept.subTitleEn} />
                        </div>
                    </div>

                    <DepartmentShowcaseImageField defaultPath={dept.showcaseImage || ""} />
                </fieldset>

                {/* Head Message */}
                <fieldset className="space-y-4 rounded-xl border bg-background p-4">
                    <legend className="px-2 text-sm font-semibold text-muted-foreground">{t("form.headMessage")}</legend>

                    <div className="space-y-2">
                        <label className="text-sm font-medium" htmlFor="writer">{t("form.writer")}</label>
                        <Input id="writer" name="writer" defaultValue={head?.writer || ""} placeholder="د. فلان - رئيس القسم" />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="mail">{t("form.email")}</label>
                            <Input id="mail" name="mail" type="email" defaultValue={head?.mail || ""} placeholder="name@buc.edu.om" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="phone">{t("form.phone")}</label>
                            <Input id="phone" name="phone" defaultValue={head?.phone || ""} placeholder="+968 25657531" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">{t("form.message")}</label>
                        <RichTextInput
                            name="messageHtml"
                            defaultValue={head?.message?.__html || ""}
                            placeholder={t("form.messagePlaceholder")}
                        />
                    </div>
                </fieldset>

                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" className="w-full sm:w-auto">{t("save")}</Button>
                </div>
            </EditDepartmentFormShell>
        </div>
    );
}
