import Link from "next/link";
import { notFound } from "next/navigation";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

import { Button } from "@/components/ui/button";
import AddStudyPlanForm from "@/components/dashboard/departments/AddStudyPlanForm";

type LevelDoc = {
    id: string;
    label: string;
    credits: string;
};

type ProgramDoc = {
    id: string;
    titleAr: string;
    titleEn: string;
    levels?: LevelDoc[];
};

type DepartmentDoc = {
    _id: unknown;
    titleAr: string;
    programs?: ProgramDoc[];
};

export default async function NewStudyPlanPage({
    params,
}: {
    params: Promise<{ id: string; programId: string }>;
}) {
    const { id, programId } = await params;

    await dbConnect();
    const dept = (await DepartmentModel.findById(id).lean()) as DepartmentDoc | null;

    if (!dept) {
        notFound();
    }

    const program = dept.programs?.find((p) => p.id === programId);

    if (!program) {
        notFound();
    }

    const levels = program.levels ?? [];

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">Add Study Plan</h1>
                    <p className="text-sm text-muted-foreground">
                        {program.titleAr} — {program.titleEn}
                    </p>
                </div>
                <Button asChild variant="outline">
                    <Link href={`/dashboard/departments/${id}/programs/${programId}/study-plan`}>Back</Link>
                </Button>
            </div>


            <AddStudyPlanForm departmentId={id} programId={programId} levels={levels} />

        </div>
    );
}
