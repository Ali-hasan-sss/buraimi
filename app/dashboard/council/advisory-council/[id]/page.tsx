import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import dbConnect from "@/lib/dbConnect";
import { AdvisoryCouncilMember } from "@/models/AdvisoryCouncil";

import MemberForm from "@/components/dashboard/council/MemberForm";

type AdvisoryDoc = {
    _id: unknown;
    name: string;
    role: string;
    description?: string;
};

async function updateMember(id: string, formData: FormData) {
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
    await AdvisoryCouncilMember.findByIdAndUpdate(id, {
        name,
        role: passedRole,
        description: safeDescription,
    });



    revalidatePath("/dashboard/council/advisory-council");
    redirect("/dashboard/council/advisory-council");
}

export default async function UpdateAdvisoryCouncilMemberPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    await dbConnect();
    const member = (await AdvisoryCouncilMember.findById(id).lean()) as AdvisoryDoc | null;

    if (!member) {
        notFound();
    }

    const action = updateMember.bind(null, id);

    return (
        <div className="max-w-xl space-y-6">
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">Update member</h1>
                <p className="text-sm text-muted-foreground">Advisory Council</p>
            </div>

            <MemberForm
                action={action}
                defaultName={member.name}
                defaultRole={member.role}
                defaultDescription={member.description || ""}
                submitLabel="Save"
            />
        </div>
    );
}
