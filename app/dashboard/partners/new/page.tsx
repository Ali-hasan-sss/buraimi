import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { Partnership } from "@/models/Partnership";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function createPartner(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const nameEn = String(formData.get("nameEn") || "").trim();
    const type = String(formData.get("type") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const link = String(formData.get("link") || "").trim();
    const international = formData.get("international") === "on";

    if (!name) {
        return;
    }

    await dbConnect();

    const count = await Partnership.countDocuments({});
    const order = count + 1;
    await Partnership.create({
        order,
        name,
        nameEn,
        type,
        description,
        date,
        link,
        international,
    });

    revalidatePath("/dashboard/partners");
    redirect("/dashboard/partners");
}

export default async function NewPartnerPage() {
    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Add new partner</h1>
                <p className="text-sm text-muted-foreground">Partners</p>
            </div>

            <form action={createPartner} className="space-y-4 rounded-xl border bg-background p-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                        Name
                    </label>
                    <Input id="name" name="name" placeholder="Name" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="nameEn">
                        Name (EN)
                    </label>
                    <Input id="nameEn" name="nameEn" placeholder="English name" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="type">
                        Type
                    </label>
                    <Input id="type" name="type" placeholder="Type" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Description"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="date">
                        Date
                    </label>
                    <Input id="date" name="date" placeholder="22-يناير-2025" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="link">
                        Link
                    </label>
                    <Input id="link" name="link" placeholder="https://..." />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        id="international"
                        name="international"
                        type="checkbox"
                        className="h-4 w-4 rounded border border-input"
                    />
                    <label className="text-sm" htmlFor="international">
                        International
                    </label>
                </div>

                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" className="w-full sm:w-auto">
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
}
