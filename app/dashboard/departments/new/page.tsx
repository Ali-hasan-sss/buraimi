import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { getFormDataString } from "@/lib/get-form-data-field";
import { DepartmentModel } from "@/models/Department";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DepartmentShowcaseImageField from "@/components/dashboard/departments/DepartmentShowcaseImageField";

async function createDepartment(formData: FormData) {
    "use server";

    const domain = getFormDataString(formData, "domain");
    const titleAr = getFormDataString(formData, "titleAr");
    const titleEn = getFormDataString(formData, "titleEn");
    const subTitleAr = getFormDataString(formData, "subTitleAr");
    const subTitleEn = getFormDataString(formData, "subTitleEn");
    const showcaseImage = getFormDataString(formData, "showcaseImage");

    if (!domain || !titleAr || !titleEn) {
        return;
    }

    await dbConnect();
    await DepartmentModel.create({
        domain,
        titleAr,
        titleEn,
        subTitleAr,
        subTitleEn,
        showcaseImage: showcaseImage || "",
        headMessage: {},
        programs: [],
        facultyMembers: [],
    });

    revalidatePath("/dashboard/departments");
    revalidatePath("/main");
    redirect("/dashboard/departments");
}

export default async function NewDepartmentPage() {
    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Add new department</h1>
                <p className="text-sm text-muted-foreground">Departments</p>
            </div>

            <form action={createDepartment} className="space-y-4 rounded-xl border bg-background p-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="domain">
                        Domain (slug)
                    </label>
                    <Input id="domain" name="domain" placeholder="e.g. english" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="titleAr">
                        Title (AR)
                    </label>
                    <Input id="titleAr" name="titleAr" placeholder="قسم اللغة الإنجليزية وآدابها" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="titleEn">
                        Title (EN)
                    </label>
                    <Input id="titleEn" name="titleEn" placeholder="Department of English Language and Literature" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subTitleAr">
                        Subtitle (AR)
                    </label>
                    <Input id="subTitleAr" name="subTitleAr" placeholder="تميز أكاديمي في اللغة والأدب والترجمة" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subTitleEn">
                        Subtitle (EN)
                    </label>
                    <Input id="subTitleEn" name="subTitleEn" placeholder="Academic Excellence in Language, Literature, and Translation" />
                </div>

                <DepartmentShowcaseImageField />

                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" className="w-full sm:w-auto">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
}
