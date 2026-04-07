import Link from "next/link";
import { notFound } from "next/navigation";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProgramLevelDoc = {
    id: string;
    label: string;
    credits: string;
};

type ProgramDoc = {
    id: string;
    titleAr: string;
    titleEn: string;
    levels?: ProgramLevelDoc[];
};

type DepartmentDoc = {
    _id: unknown;
    titleAr: string;
    programs?: ProgramDoc[];
};

export default async function ProgramPage({
    params,
}: {
    params: Promise<{ id: string; programId: string }>;
}) {
    const { id, programId } = await params;

    await dbConnect();
    const dept = (await DepartmentModel.findById(id).lean()) as DepartmentDoc | null;
    if (!dept) notFound();

    const program = dept.programs?.find((p) => p.id === programId);
    if (!program) notFound();

    const levels = Array.isArray(program.levels) ? program.levels : [];
    const defaultLevelId = levels[0]?.id;

    const facultyHref = `/dashboard/departments/${id}#faculty-members`;

    const cards = [
        {
            title: "أهداف البرنامج",
            subtitle: "Program Objectives",
            description: "View the goals and learning outcomes of this program",
            href: `/dashboard/departments/${id}/programs/${programId}/objective`,
            gradient: "from-[#254151] to-[#6096b4]",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            ),
        },
        {
            title: "الخطة الدراسية",
            subtitle: "Study Plan",
            description: "Explore courses, credit hours, and requirements",
            href: `/dashboard/departments/${id}/programs/${programId}/study-plan`,
            gradient: "from-[#c2a772] to-[#a88c5a]",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                </svg>
            ),
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">{program.titleAr}</h1>
                <p className="text-sm text-muted-foreground">{program.titleEn}</p>
            </div>

            <div className="rounded-2xl border border-[#c2a772]/30 bg-[#c2a772]/5 p-5 text-sm leading-relaxed text-[#254151]">
                <p className="font-semibold mb-1">أعضاء الهيئة التدريسية / Faculty</p>
                <p className="text-muted-foreground mb-3">
                    الكادر التدريسي يُدار على مستوى القسم (جميع البرامج). استخدم الزر أدناه لإضافة أو تعديل الأعضاء.
                    <span className="mx-1" />
                    Faculty is managed at the <strong>department</strong> level (shared across programs). Use the link below to add or edit members.
                </p>
                <Link
                    href={facultyHref}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#254151] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2d36]"
                >
                    إدارة الكادر التدريسي — Manage faculty
                </Link>
            </div>

            {/* Levels Tabs */}
            {levels.length > 0 && defaultLevelId ? (
                <div className="rounded-2xl border bg-background p-6">
                    <div className="mb-4 flex flex-col gap-1">
                        <h2 className="text-lg font-semibold tracking-tight">Levels</h2>
                        <p className="text-sm text-muted-foreground">Select a level to view its plan summary.</p>
                    </div>

                    <Tabs defaultValue={defaultLevelId}>
                        <TabsList className="flex flex-wrap" variant="default">
                            {levels.map((lvl) => (
                                <TabsTrigger key={lvl.id} value={lvl.id}>
                                    {lvl.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {levels.map((lvl) => (
                            <TabsContent key={lvl.id} value={lvl.id}>
                                <div className="mt-4 rounded-xl border bg-white p-5">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <div className="text-base font-semibold text-[#254151]">{lvl.label}</div>
                                            <div className="text-sm text-muted-foreground">Level ID: {lvl.id}</div>
                                        </div>
                                        <div className="inline-flex items-center rounded-full border border-[#c2a772]/30 bg-[#c2a772]/5 px-3 py-1 text-xs font-medium text-[#254151]">
                                            Credits: {lvl.credits}
                                        </div>
                                    </div>

                                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <Link
                                            href={`/dashboard/departments/${id}/programs/${programId}/objective`}
                                            className="rounded-xl border bg-background px-4 py-3 text-sm font-medium text-[#254151] transition-colors hover:bg-muted"
                                        >
                                            View objectives
                                        </Link>
                                        <Link
                                            href={`/dashboard/departments/${id}/programs/${programId}/study-plan`}
                                            className="rounded-xl border bg-background px-4 py-3 text-sm font-medium text-[#254151] transition-colors hover:bg-muted"
                                        >
                                            View study plan
                                        </Link>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            ) : (
                <div className="rounded-2xl border bg-background p-6 text-sm text-muted-foreground">No levels found for this program.</div>
            )}

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {cards.map((card) => (
                    <Link
                        key={card.href}
                        href={card.href}
                        className="group relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className={`bg-gradient-to-br ${card.gradient} p-8 text-white`}>
                            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-white/15 p-3 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                                {card.icon}
                            </div>

                            <h3 className="text-xl font-bold">{card.title}</h3>
                            <p className="mt-1 text-sm text-white/80">{card.subtitle}</p>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">{card.description}</p>

                            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-all duration-300 group-hover:gap-3">
                                <span>View details</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        {/* Decorative circle */}
                        <div className="pointer-events-none absolute -bottom-12 -right-12 size-40 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
                    </Link>
                ))}
            </div>

            {/* Back link */}
            <div>
                <Link
                    href={`/dashboard/departments/${id}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Back to department
                </Link>
            </div>
        </div>
    );
}