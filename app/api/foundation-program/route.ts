import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import { FoundationProgramModel } from "@/models/FoundationProgram";
import { foundationLevelOneDetailsSeed, foundationProgramSeed } from "@/staticData/foundation-program";

async function ensureDoc() {
  let doc = await FoundationProgramModel.findOne({}).lean();
  if (!doc) {
    await FoundationProgramModel.create(foundationProgramSeed);
    doc = await FoundationProgramModel.findOne({}).lean();
    return doc;
  }

  const currentLevel1 = (doc as { level1Courses?: unknown[] }).level1Courses;
  const currentLevel2 = (doc as { level2Courses?: unknown[] }).level2Courses;
  const currentStudyTitleAr = (doc as { studyTitleAr?: unknown }).studyTitleAr;
  const currentStudyTitleEn = (doc as { studyTitleEn?: unknown }).studyTitleEn;
  const currentLevel1Details = (doc as { level1Details?: unknown }).level1Details;

  const hasValidLevel1 = Array.isArray(currentLevel1) && currentLevel1.length > 0;
  const hasValidLevel2 = Array.isArray(currentLevel2) && currentLevel2.length > 0;
  const hasValidStudyTitleAr =
    typeof currentStudyTitleAr === "string" && currentStudyTitleAr.trim().length > 0;
  const hasValidStudyTitleEn =
    typeof currentStudyTitleEn === "string" && currentStudyTitleEn.trim().length > 0;
  const hasValidLevel1Details =
    typeof currentLevel1Details === "object" &&
    currentLevel1Details !== null &&
    Object.keys(currentLevel1Details as Record<string, unknown>).length > 0;

  const needsBackfill =
    !hasValidLevel1 || !hasValidLevel2 || !hasValidStudyTitleAr || !hasValidStudyTitleEn || !hasValidLevel1Details;

  if (needsBackfill) {
    await FoundationProgramModel.findOneAndUpdate(
      {},
      {
        $set: {
          level1Courses: Array.isArray((doc as { level1Courses?: unknown[] }).level1Courses)
            && (doc as { level1Courses: unknown[] }).level1Courses.length > 0
            ? (doc as { level1Courses: unknown[] }).level1Courses
            : foundationProgramSeed.level1Courses,
          level2Courses: Array.isArray((doc as { level2Courses?: unknown[] }).level2Courses)
            && (doc as { level2Courses: unknown[] }).level2Courses.length > 0
            ? (doc as { level2Courses: unknown[] }).level2Courses
            : foundationProgramSeed.level2Courses,
          studyTitleAr:
            typeof (doc as { studyTitleAr?: unknown }).studyTitleAr === "string" &&
            (doc as { studyTitleAr: string }).studyTitleAr.trim().length > 0
              ? (doc as { studyTitleAr: string }).studyTitleAr
              : foundationProgramSeed.studyTitleAr,
          studyTitleEn:
            typeof (doc as { studyTitleEn?: unknown }).studyTitleEn === "string" &&
            (doc as { studyTitleEn: string }).studyTitleEn.trim().length > 0
              ? (doc as { studyTitleEn: string }).studyTitleEn
              : foundationProgramSeed.studyTitleEn,
          level1Details: hasValidLevel1Details
            ? (doc as { level1Details: unknown }).level1Details
            : foundationLevelOneDetailsSeed,
        },
      },
      { new: true },
    );
    doc = await FoundationProgramModel.findOne({}).lean();
  }

  return doc;
}

export async function GET() {
  try {
    await dbConnect();
    const data = await ensureDoc();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    const body = (await req.json()) as Record<string, unknown>;
    const data = await FoundationProgramModel.findOneAndUpdate(
      {},
      { $set: body },
      { new: true, upsert: true },
    ).lean();
    return NextResponse.json({ ok: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
