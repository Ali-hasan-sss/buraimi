import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { DepartmentModel } from "@/models/Department";
import dbConnect from "@/lib/dbConnect";

export async function deleteDepartment(id: string) {
    "use server";

    await dbConnect();
    await DepartmentModel.findByIdAndDelete(id);
    revalidatePath("/dashboard/departments");
    redirect("/dashboard/departments");
}

export async function deleteProgram(deptId: string, programId: string) {
    "use server";

    await dbConnect();
    await DepartmentModel.findByIdAndUpdate(deptId, {
        $pull: { programs: { id: programId } },
    });
    revalidatePath(`/dashboard/departments/${deptId}`);
    redirect(`/dashboard/departments/${deptId}`);
}

export async function DeleteMeMber(deptId: string, memberEmail: string) {
    "use server";

    await dbConnect();
    await DepartmentModel.findByIdAndUpdate(deptId, {
        $pull: { facultyMembers: { email: memberEmail } },
    });
    revalidatePath(`/dashboard/departments/${deptId}`);
    redirect(`/dashboard/departments/${deptId}`);
}