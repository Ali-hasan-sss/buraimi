import { Button } from "@/components/ui/button";
import Link from "next/link";
import EditProgramDialog from "./EditProgramDialog";
import { deleteProgram } from "@/app/dashboard/departments/[id]/action";
import { DepartmentDoc } from "@/types/dashboard";

export default function ProgramCard(
    { dept, id }: {
        dept: DepartmentDoc,
        id: string
    }
) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Programs</h2>
                <Button asChild>
                    <Link href={`/dashboard/departments/${String(dept._id)}/programs/new`}>Add new program</Link>
                </Button>
            </div>

            {!dept.programs || dept.programs.length === 0 ? (
                <div className="rounded-xl border bg-background p-6 text-sm text-muted-foreground">No programs found.</div>
            ) : (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {dept.programs.map((prog) => (
                        <div
                            key={prog.id}
                            className="rounded-2xl border overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="bg-gradient-to-r from-[#254151] to-[#3a6373] px-6 py-4">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-white font-bold">{prog.titleAr}</h3>
                                        <p className="text-blue-100 text-sm mt-1">{prog.titleEn}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <EditProgramDialog
                                            departmentId={id}
                                            programId={prog.id}
                                            titleAr={prog.titleAr}
                                            titleEn={prog.titleEn}
                                            descriptionAr={prog.descriptionAr}
                                            descriptionEn={prog.descriptionEn}
                                        />
                                        <form action={deleteProgram.bind(null, id, prog.id)}>
                                            <Button type="submit" size="sm" variant="destructive" className="h-7 text-xs">Delete</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                <p className="text-gray-700 text-sm leading-relaxed">{prog.descriptionAr}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{prog.descriptionEn}</p>

                                {/* Levels */}
                                {prog.levels && prog.levels.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {prog.levels.map((lvl) => (
                                            <span
                                                key={lvl.id}
                                                className="inline-flex items-center gap-1.5 rounded-full border border-[#c2a772]/30 bg-[#c2a772]/5 px-3 py-1 text-xs font-medium text-[#254151]"
                                            >
                                                {lvl.label} — {lvl.credits}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Links */}
                                <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-gray-100">
                                    <Button asChild size="sm" variant="outline">
                                        <Link href={`/dashboard/departments/${String(dept._id)}/programs/${prog.id}/objective`}>
                                            Objective
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm" variant="outline">
                                        <Link href={`/dashboard/departments/${String(dept._id)}/programs/${prog.id}/study-plan`}>
                                            Study Plan
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm" variant="secondary">
                                        <Link
                                            href={`/dashboard/departments/${String(dept._id)}#faculty-members`}
                                            title="Faculty is managed at department level"
                                        >
                                            Faculty
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}