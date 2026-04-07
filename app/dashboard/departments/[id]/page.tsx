import Link from "next/link";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import AddHeadMessageDialog from "@/components/dashboard/departments/AddHeadMessageDialog";
import EditProgramDialog from "@/components/dashboard/departments/EditProgramDialog";
import { deleteDepartment, DeleteMeMber, deleteProgram } from "./action";
import { DepartmentDoc, facultyMembers } from "@/types/dashboard";
import ProgramCard from "@/components/dashboard/departments/ProgramCard";
import { Mail, Phone, Users } from "lucide-react";
import FacultyMembersSection, { FacultyMember } from "@/components/dashboard/departments/FacultyMembersSection";




export default async function DepartmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    await dbConnect();
    const dept = (await DepartmentModel.findById(id).lean()) as DepartmentDoc | null;

    if (!dept) {
        notFound();
    }

    const head = dept.headMessage;
    const deleteAction = deleteDepartment.bind(null, id);

    const facultyMembers: facultyMembers[] = dept.facultyMembers || []

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight">{dept.titleAr}</h1>
                    <p className="text-sm text-muted-foreground">{dept.titleEn}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button asChild variant="outline">
                        <Link href={`/dashboard/departments/${String(dept._id)}/edit`}>Edit</Link>
                    </Button>
                    <form action={deleteAction}>
                        <Button type="submit" variant="destructive">Delete</Button>
                    </form>
                </div>
            </div>

            {/* Info badges */}
            <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#c2a772]/10 to-[#c2a772]/5 rounded-full border border-[#c2a772]/20">
                    <div className="w-2 h-2 bg-[#c2a772] rounded-full" />
                    <span className="text-[#254151] font-semibold text-sm">{dept.domain}</span>
                </div>
                {dept.programs && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                        <span className="text-[#254151] font-semibold text-sm">{dept.programs.length} programs</span>
                    </div>
                )}
                {dept.facultyMembers && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                        <span className="text-[#254151] font-semibold text-sm">{dept.facultyMembers.length} faculty members</span>
                    </div>
                )}
            </div>

            {/* Subtitles */}
            <div className="rounded-xl border bg-background p-6 space-y-2">
                <p className="text-gray-700 leading-relaxed">{dept.subTitleAr}</p>
                <p className="text-gray-500 leading-relaxed text-sm">{dept.subTitleEn}</p>
            </div>

            {/* Head Message Section */}
            <div className="rounded-2xl border overflow-hidden">
                <div className="bg-gradient-to-r from-[#254151] to-[#6096b4] px-6 py-4">
                    <h2 className="text-lg font-semibold text-white">رسالة رئيس القسم</h2>
                    {head?.writer && <p className="text-blue-100 text-sm mt-1">{head.writer}</p>}
                </div>

                <div className="p-6 space-y-6 bg-white">
                    {head?.message?.__html ? (
                        <div
                            className="prose prose-gray max-w-none leading-relaxed text-gray-700"
                            dangerouslySetInnerHTML={{ __html: head.message.__html }}
                        />
                    ) : (
                        <div className="flex flex-col items-center gap-3 py-4">
                            <AddHeadMessageDialog departmentId={id} />
                        </div>
                    )}

                    {(head?.mail || head?.phone) && (
                        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 text-sm">
                            {head.mail && (
                                <div className="flex items-center gap-2 text-[#254151]">
                                    <span className="font-medium">Email:</span>
                                    <span>{head.mail}</span>
                                </div>
                            )}
                            {head.phone && (
                                <div className="flex items-center gap-2 text-[#254151]">
                                    <span className="font-medium">Phone:</span>
                                    <span>{head.phone}</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Programs Section */}
            <ProgramCard dept={dept} id={id} />

            <div id="faculty-members">
                <FacultyMembersSection
                    departmentId={id}
                    members={(dept.facultyMembers as FacultyMember[]) || []}
                />
            </div>

        </div>
    );
}
