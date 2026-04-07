import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { AdvisoryCouncilMember } from "@/models/AdvisoryCouncil";

import MemberForm from "@/components/dashboard/council/MemberForm";
import { CollegeCouncilMember } from "@/models/CollegeCouncil";

async function createMember(formData: FormData) {
    "use server";

    const name = String(formData.get("name") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const description = String(formData.get("description") || "").trim();

    if (!name || !role) {
        return;
    }

    await dbConnect();

    const safeDescription = role === "member" || role === "industry" ? "" : description;
    const passedRole = role == "member" ? "عضو" : role;

    await CollegeCouncilMember.create({ name, role: passedRole, description: safeDescription });

    revalidatePath("/dashboard/council/college-council");
    redirect("/dashboard/council/advisory-council");
}

export default async function NewAdvisoryCouncilMemberPage() {
    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Add new member</h1>
                <p className="text-sm text-muted-foreground">College Council</p>
            </div>

            <MemberForm action={createMember} />
        </div>
    );
}
