import Link from "next/link";
import { notFound } from "next/navigation";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EditableStudyPlanTable from "@/components/dashboard/departments/EditableStudyPlanTable";
import DeleteAllStudyPlansButton from "@/components/dashboard/departments/DeleteAllStudyPlansButton";
import EditPlanHeaderHoursDialog from "@/components/dashboard/departments/EditPlanHeaderHoursDialog";
import DeleteStudyPlanButton from "@/components/dashboard/departments/DeleteStudyPlanButton";

type CourseDoc = {
    seq: number;
    code: string;
    title: string;
    credits: number;
    oqf: number;
    prerequisite: string;
};

type PlanHeaderDoc = {
    title: string;
    totalHour?: number | null;
    generalRequirementsHours?: number | null;
    departmentRequirementsHours?: number | null;
    majorRequirementsHours?: number | null;
    electiveRequirements?: number | null;
};

type StudyPlanDoc = {
    id: string;
    PlanHeader: PlanHeaderDoc;
    generalRequirements: CourseDoc[];
    departmentRequirements: CourseDoc[];
    majorRequirements: CourseDoc[];
    electiveRequirements?: CourseDoc[];
};

type ProgramDoc = {
    id: string;
    titleAr: string;
    titleEn: string;
    levels?: { id: string; label: string; credits: string }[];
    studyPlan?: StudyPlanDoc[];
};

type DepartmentDoc = {
    _id: unknown;
    titleAr: string;
    programs?: ProgramDoc[];
};



export default async function StudyPlanPage({
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

    const plans = program.studyPlan ?? [];
    const defaultPlanId = plans[0]?.id;

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">{program.titleAr}</h1>
                    <p className="text-sm text-muted-foreground">{program.titleEn}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild>
                        <Link href={`/dashboard/departments/${id}/programs/${programId}/study-plan/new`}>
                            Add study plan
                        </Link>
                    </Button>
                    <DeleteAllStudyPlansButton
                        departmentId={id}
                        programId={programId}
                        disabled={plans.length === 0}
                    />
                    <Button asChild variant="outline">
                        <Link href={`/dashboard/departments/${id}`}>Back to department</Link>
                    </Button>
                </div>
            </div>

            {plans.length === 0 ? (
                <div className="rounded-xl border bg-background p-6 text-sm text-muted-foreground">
                    No study plans found for this program.
                </div>
            ) : (
                <div className="rounded-2xl border bg-background p-6">
                    <div className="mb-4 flex flex-col gap-1">
                        <h2 className="text-lg font-semibold tracking-tight">Study Plans</h2>
                        <p className="text-sm text-muted-foreground">Select a plan tab, then expand sections inside the accordion.</p>
                    </div>

                    {defaultPlanId ? (
                        <Tabs defaultValue={defaultPlanId}>
                            <TabsList className="flex flex-wrap" variant="default">
                                {plans.map((plan) => (
                                    <TabsTrigger key={plan.id} value={plan.id}>
                                        {plan.PlanHeader?.title || plan.id}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {plans.map((plan) => {
                                const h = plan.PlanHeader;
                                return (
                                    <TabsContent key={plan.id} value={plan.id}>
                                        <div className="mt-4 rounded-2xl border overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#254151] to-[#3a6373] px-6 py-4">
                                                <h3 className="text-lg font-semibold text-white">{h.title}</h3>
                                            </div>

                                            <div className="p-6 bg-white space-y-6">
                                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                                    <div className="text-sm font-medium text-muted-foreground">
                                                        Update PlanHeader hours (total is auto-calculated)
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <EditPlanHeaderHoursDialog
                                                            departmentId={id}
                                                            programId={programId}
                                                            planId={plan.id}
                                                            planTitle={h.title}
                                                            generalRequirementsHours={h.generalRequirementsHours}
                                                            departmentRequirementsHours={h.departmentRequirementsHours}
                                                            majorRequirementsHours={h.majorRequirementsHours}
                                                            electiveRequirements={h.electiveRequirements}
                                                        />
                                                        <DeleteStudyPlanButton
                                                            departmentId={id}
                                                            programId={programId}
                                                            planId={plan.id}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3">
                                                    {h.totalHour != null && (
                                                        <span className="rounded-full border bg-blue-50 px-3 py-1 text-xs font-medium text-[#254151]">
                                                            Total: {h.totalHour} hrs
                                                        </span>
                                                    )}
                                                    {h.generalRequirementsHours != null && (
                                                        <span className="rounded-full border bg-green-50 px-3 py-1 text-xs font-medium text-[#254151]">
                                                            General: {h.generalRequirementsHours} hrs
                                                        </span>
                                                    )}
                                                    {h.departmentRequirementsHours != null && (
                                                        <span className="rounded-full border bg-amber-50 px-3 py-1 text-xs font-medium text-[#254151]">
                                                            Department: {h.departmentRequirementsHours} hrs
                                                        </span>
                                                    )}
                                                    {h.majorRequirementsHours != null && (
                                                        <span className="rounded-full border bg-purple-50 px-3 py-1 text-xs font-medium text-[#254151]">
                                                            Major: {h.majorRequirementsHours} hrs
                                                        </span>
                                                    )}
                                                    {h.electiveRequirements != null && (
                                                        <span className="rounded-full border bg-rose-50 px-3 py-1 text-xs font-medium text-[#254151]">
                                                            Elective: {h.electiveRequirements} hrs
                                                        </span>
                                                    )}
                                                </div>

                                                <Accordion type="multiple" className="w-full">
                                                    <AccordionItem value="general">
                                                        <AccordionTrigger>General Requirements</AccordionTrigger>
                                                        <AccordionContent>
                                                            <EditableStudyPlanTable
                                                                departmentId={id}
                                                                programId={programId}
                                                                planId={plan.id}
                                                                section="generalRequirements"
                                                                title="General Requirements"
                                                                courses={plan.generalRequirements}
                                                            />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                    <AccordionItem value="department">
                                                        <AccordionTrigger>Department Requirements</AccordionTrigger>
                                                        <AccordionContent>
                                                            <EditableStudyPlanTable
                                                                departmentId={id}
                                                                programId={programId}
                                                                planId={plan.id}
                                                                section="departmentRequirements"
                                                                title="Department Requirements"
                                                                courses={plan.departmentRequirements}
                                                            />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                    <AccordionItem value="major">
                                                        <AccordionTrigger>Major Requirements</AccordionTrigger>
                                                        <AccordionContent>
                                                            <EditableStudyPlanTable
                                                                departmentId={id}
                                                                programId={programId}
                                                                planId={plan.id}
                                                                section="majorRequirements"
                                                                title="Major Requirements"
                                                                courses={plan.majorRequirements}
                                                            />
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                    {plan.electiveRequirements && plan.electiveRequirements.length > 0 && (
                                                        <AccordionItem value="elective">
                                                            <AccordionTrigger>Elective Requirements</AccordionTrigger>
                                                            <AccordionContent>
                                                                <EditableStudyPlanTable
                                                                    departmentId={id}
                                                                    programId={programId}
                                                                    planId={plan.id}
                                                                    section="electiveRequirements"
                                                                    title="Elective Requirements"
                                                                    courses={plan.electiveRequirements}
                                                                />
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    )}
                                                </Accordion>
                                            </div>
                                        </div>
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
                    ) : null}
                </div>
            )}
        </div>
    );
}
