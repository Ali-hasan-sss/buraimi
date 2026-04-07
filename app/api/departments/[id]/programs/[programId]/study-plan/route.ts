import { NextResponse } from "next/server";

import dbConnect from "@/lib/dbConnect";
import { DepartmentModel } from "@/models/Department";

export const dynamic = "force-dynamic";

type SectionKey =
    | "generalRequirements"
    | "departmentRequirements"
    | "majorRequirements"
    | "electiveRequirements";

type CourseDoc = {
    seq: number;
    code: string;
    title: string;
    credits: number;
    oqf: number;
    prerequisite: string;
};

type Body =
    | { action: "add"; planId: string; section: SectionKey; course: CourseDoc }
    | { action: "update"; planId: string; section: SectionKey; code: string; course: Partial<CourseDoc> }
    | { action: "delete"; planId: string; section: SectionKey; code: string };

type StudyPlanDoc = {
    id: string;
    PlanHeader?: {
        title: string;
        totalHour?: number | null;
        generalRequirementsHours?: number | null;
        departmentRequirementsHours?: number | null;
        majorRequirementsHours?: number | null;
        electiveRequirements?: number | null;
    };
    generalRequirements?: CourseDoc[];
    departmentRequirements?: CourseDoc[];
    majorRequirements?: CourseDoc[];
    electiveRequirements?: CourseDoc[];
};

type ProgramLevelDoc = {
    id: string;
    label: string;
    credits: string;
};

type ProgramDoc = {
    id: string;
    levels?: ProgramLevelDoc[];
    studyPlan?: StudyPlanDoc[];
};

type DeptProgramProjection = {
    programs?: ProgramDoc[];
};

function normalizeCourse(course: CourseDoc): CourseDoc {
    return {
        seq: Number(course.seq) || 0,
        code: String(course.code || "").trim(),
        title: String(course.title || "").trim(),
        credits: Number(course.credits) || 0,
        oqf: Number(course.oqf) || 0,
        prerequisite: String(course.prerequisite || "").trim(),
    };
}

type CreateStudyPlanBody = {
    levelId: string;
    levelLabel?: string;
    sections: {
        generalRequirements?: boolean;
        departmentRequirements?: boolean;
        majorRequirements?: boolean;
        electiveRequirements?: boolean;
    };
    hours: {
        generalRequirementsHours?: number;
        departmentRequirementsHours?: number;
        majorRequirementsHours?: number;
        electiveRequirementsHours?: number;
    };
};

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        const body = (await request.json()) as CreateStudyPlanBody;

        const levelId = String(body.levelId || "").trim();
        if (!levelId) {
            return NextResponse.json({ ok: false, message: "levelId is required" }, { status: 400 });
        }

        await dbConnect();

        const dept = await DepartmentModel.findOne(
            { _id: id, "programs.id": programId },
            { "programs.$": 1 }
        ).lean();

        const program = (dept as DeptProgramProjection | null)?.programs?.[0];
        if (!program) {
            return NextResponse.json({ ok: false, message: "Program not found" }, { status: 404 });
        }

        const levels = Array.isArray(program.levels) ? program.levels : [];
        const level = levels.find((l) => String(l.id) === levelId);

        const existingPlans = Array.isArray(program.studyPlan) ? program.studyPlan : [];
        const exists = existingPlans.some((p) => String(p.id) === levelId);
        if (exists) {
            return NextResponse.json(
                { ok: false, message: "A study plan already exists for this level" },
                { status: 400 }
            );
        }

        const h = {
            generalRequirementsHours: body.sections?.generalRequirements
                ? Number(body.hours?.generalRequirementsHours ?? 0)
                : null,
            departmentRequirementsHours: body.sections?.departmentRequirements
                ? Number(body.hours?.departmentRequirementsHours ?? 0)
                : null,
            majorRequirementsHours: body.sections?.majorRequirements
                ? Number(body.hours?.majorRequirementsHours ?? 0)
                : null,
            electiveRequirementsHours: body.sections?.electiveRequirements
                ? Number(body.hours?.electiveRequirementsHours ?? 0)
                : null,
        };

        const totalHour =
            (h.generalRequirementsHours || 0) +
            (h.departmentRequirementsHours || 0) +
            (h.majorRequirementsHours || 0) +
            (h.electiveRequirementsHours || 0);

        const computedCredits = `${totalHour} ساعة معتمدة`;

        const resolvedLabel = (level?.label || String(body.levelLabel || "").trim());
        if (!resolvedLabel) {
            return NextResponse.json({ ok: false, message: "levelLabel is required" }, { status: 400 });
        }

        const newPlan: StudyPlanDoc = {
            id: levelId,
            PlanHeader: {
                title: resolvedLabel,
                totalHour,
                generalRequirementsHours: h.generalRequirementsHours,
                departmentRequirementsHours: h.departmentRequirementsHours,
                majorRequirementsHours: h.majorRequirementsHours,
                electiveRequirements: h.electiveRequirementsHours,
            },
            generalRequirements: body.sections?.generalRequirements ? [] : [],
            departmentRequirements: body.sections?.departmentRequirements ? [] : [],
            majorRequirements: body.sections?.majorRequirements ? [] : [],
            electiveRequirements: body.sections?.electiveRequirements ? [] : [],
        };

        if (level) {
            await DepartmentModel.updateOne(
                { _id: id },
                {
                    $push: {
                        "programs.$[p].studyPlan": newPlan,
                    },
                    $set: {
                        "programs.$[p].levels.$[lvl].credits": computedCredits,
                    },
                },
                {
                    arrayFilters: [{ "p.id": programId }, { "lvl.id": levelId }],
                }
            );
        } else {
            await DepartmentModel.updateOne(
                { _id: id },
                {
                    $push: {
                        "programs.$[p].studyPlan": newPlan,
                        "programs.$[p].levels": {
                            id: levelId,
                            label: resolvedLabel,
                            credits: computedCredits,
                        },
                    },
                },
                {
                    arrayFilters: [{ "p.id": programId }],
                }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}

type UpdateHeaderBody = {
    planId: string;
    hours: {
        generalRequirementsHours?: number | null;
        departmentRequirementsHours?: number | null;
        majorRequirementsHours?: number | null;
        electiveRequirements?: number | null;
    };
};

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        const body = (await request.json()) as UpdateHeaderBody;

        const planId = String(body.planId || "").trim();
        if (!planId) {
            return NextResponse.json({ ok: false, message: "planId is required" }, { status: 400 });
        }

        const h = {
            generalRequirementsHours:
                body.hours?.generalRequirementsHours == null
                    ? null
                    : Number(body.hours.generalRequirementsHours),
            departmentRequirementsHours:
                body.hours?.departmentRequirementsHours == null
                    ? null
                    : Number(body.hours.departmentRequirementsHours),
            majorRequirementsHours:
                body.hours?.majorRequirementsHours == null
                    ? null
                    : Number(body.hours.majorRequirementsHours),
            electiveRequirements:
                body.hours?.electiveRequirements == null ? null : Number(body.hours.electiveRequirements),
        };

        const totalHour =
            (h.generalRequirementsHours || 0) +
            (h.departmentRequirementsHours || 0) +
            (h.majorRequirementsHours || 0) +
            (h.electiveRequirements || 0);

        await dbConnect();

        await DepartmentModel.updateOne(
            { _id: id },
            {
                $set: {
                    "programs.$[p].studyPlan.$[sp].PlanHeader.generalRequirementsHours":
                        h.generalRequirementsHours,
                    "programs.$[p].studyPlan.$[sp].PlanHeader.departmentRequirementsHours":
                        h.departmentRequirementsHours,
                    "programs.$[p].studyPlan.$[sp].PlanHeader.majorRequirementsHours":
                        h.majorRequirementsHours,
                    "programs.$[p].studyPlan.$[sp].PlanHeader.electiveRequirements": h.electiveRequirements,
                    "programs.$[p].studyPlan.$[sp].PlanHeader.totalHour": totalHour,
                    "programs.$[p].levels.$[lvl].credits": `${totalHour} ساعة معتمدة`,
                },
            },
            {
                arrayFilters: [{ "p.id": programId }, { "sp.id": planId }, { "lvl.id": planId }],
            }
        );

        return NextResponse.json({ ok: true, totalHour });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        await dbConnect();

        const url = new URL(request.url);
        const planId = url.searchParams.get("planId")?.trim();

        if (planId) {
            await DepartmentModel.updateOne(
                { _id: id },
                {
                    $pull: {
                        "programs.$[p].studyPlan": { id: planId },
                    },
                },
                {
                    arrayFilters: [{ "p.id": programId }],
                }
            );

            return NextResponse.json({ ok: true });
        }

        await DepartmentModel.updateOne(
            { _id: id },
            {
                $set: {
                    "programs.$[p].studyPlan": [],
                },
            },
            {
                arrayFilters: [{ "p.id": programId }],
            }
        );

        return NextResponse.json({ ok: true });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string; programId: string }> }
) {
    try {
        const { id, programId } = await params;
        const body = (await request.json()) as Body;

        await dbConnect();

        const dept = await DepartmentModel.findOne(
            { _id: id, "programs.id": programId },
            { "programs.$": 1 }
        ).lean();

        const program = (dept as DeptProgramProjection | null)?.programs?.[0];
        const studyPlan = Array.isArray(program?.studyPlan) ? program.studyPlan : [];

        const plan = studyPlan.find((p) => String(p?.id) === String(body.planId));
        if (!plan) {
            return NextResponse.json({ ok: false, message: "Study plan not found" }, { status: 404 });
        }

        const section = body.section;
        const current: CourseDoc[] = Array.isArray(plan?.[section]) ? plan[section] : [];
        const next = [...current];

        if (body.action === "add") {
            const c = normalizeCourse(body.course);
            if (!c.code) {
                return NextResponse.json({ ok: false, message: "Course code is required" }, { status: 400 });
            }
            const exists = next.some((x) => String(x.code).toLowerCase() === c.code.toLowerCase());
            if (exists) {
                return NextResponse.json({ ok: false, message: "Course code already exists" }, { status: 400 });
            }
            next.push(c);
        } else if (body.action === "update") {
            const code = String(body.code || "").trim();
            const idx = next.findIndex((x) => String(x.code).toLowerCase() === code.toLowerCase());
            if (idx === -1) {
                return NextResponse.json({ ok: false, message: "Course not found" }, { status: 404 });
            }

            const merged: CourseDoc = normalizeCourse({
                ...next[idx],
                ...(body.course as CourseDoc),
                code: next[idx].code,
            });

            next[idx] = merged;
        } else if (body.action === "delete") {
            const code = String(body.code || "").trim();
            const idx = next.findIndex((x) => String(x.code).toLowerCase() === code.toLowerCase());
            if (idx === -1) {
                return NextResponse.json({ ok: false, message: "Course not found" }, { status: 404 });
            }
            next.splice(idx, 1);
        }

        const path = `programs.$[p].studyPlan.$[sp].${section}`;

        await DepartmentModel.updateOne(
            { _id: id },
            { $set: { [path]: next } },
            {
                arrayFilters: [{ "p.id": programId }, { "sp.id": body.planId }],
            }
        );

        return NextResponse.json({ ok: true, data: next });
    } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        return NextResponse.json({ ok: false, message }, { status: 500 });
    }
}
