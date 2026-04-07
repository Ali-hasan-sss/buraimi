import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { BoardDirector } from "@/models/BoardDirector";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

async function createMember(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "").trim();

    if (!name || !role) {
        return;
    }

    await dbConnect();
    await BoardDirector.create({ name, role });

    revalidatePath("/dashboard/council/board-directors");
    redirect("/dashboard/council/board-directors");
}

export default async function NewDirectorPage() {
    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Add new member</h1>
                <p className="text-sm text-muted-foreground">Board of Directors</p>
            </div>

            <form action={createMember} className="space-y-4 rounded-xl border bg-background p-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">Name</label>
                    <Input id="name" name="name" placeholder="Name" required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="role">Role</label>
                    <Input id="role" name="role" placeholder="Role" required />
                </div>

                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" className="w-full sm:w-auto">Create</Button>
                </div>
            </form>
        </div>
    );
}
