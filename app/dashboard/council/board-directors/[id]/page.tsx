import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { BoardDirector } from "@/models/BoardDirector";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type DirectorDoc = {
    _id: unknown;
    name: string;
    role: string;
};

async function updateMember(id: string, formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "").trim();

    if (!name || !role) {
        return;
    }

    await dbConnect();
    await BoardDirector.findByIdAndUpdate(id, { name, role });

    revalidatePath("/dashboard/council/board-directors");
    redirect("/dashboard/council/board-directors");
}

export default async function UpdateDirectorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    await dbConnect();
    const member = (await BoardDirector.findById(id).lean()) as DirectorDoc | null;

    if (!member) {
        notFound();
    }

    const action = updateMember.bind(null, id);

    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Update member</h1>
                <p className="text-sm text-muted-foreground">Board of Directors</p>
            </div>

            <form action={action} className="space-y-4 rounded-xl border bg-background p-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">Name</label>
                    <Input id="name" name="name" defaultValue={member.name} required />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="role">Role</label>
                    <Input id="role" name="role" defaultValue={member.role} required />
                </div>

                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" className="w-full sm:w-auto">Save</Button>
                </div>
            </form>
        </div>
    );
}
