import Link from "next/link";
import { notFound } from "next/navigation";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

import { Button } from "@/components/ui/button";
import ObjectivesManager from "@/components/dashboard/departments/ObjectivesManager";

type ProgramDoc = {
    id: string;
    titleAr: string;
    titleEn: string;
    objective?: { title: string; data: string[] };
};

type DepartmentDoc = {
    _id: unknown;
    titleAr: string;
    programs?: ProgramDoc[];
};

export default async function ObjectivePage({
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

    const objective = program.objective;

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">{program.titleAr}</h1>
                    <p className="text-sm text-muted-foreground">{program.titleEn}</p>
                </div>
                <Button asChild variant="outline">
                    <Link href={`/dashboard/departments/${id}`}>Back to department</Link>
                </Button>
            </div>

            <div className="rounded-2xl border overflow-hidden">
                <div className="bg-gradient-to-r from-[#254151] to-[#3a6373] px-6 py-4">
                    <h2 className="text-lg font-semibold text-white">
                        {objective?.title || "أهداف البرنامج"}
                    </h2>
                </div>

                <div className="p-6 bg-white">
                    <ObjectivesManager
                        departmentId={id}
                        programId={programId}
                        data={objective?.data || []}
                    />
                </div>
            </div>
        </div>
    );
}
