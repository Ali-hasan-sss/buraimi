import { Schema, model, models } from "mongoose";

const FoundationCourseSchema = new Schema(
  {
    code: { type: String, required: true, trim: true },
    titleAr: { type: String, required: true, trim: true },
    titleEn: { type: String, required: true, trim: true },
    credits: { type: Number, required: true, min: 0, default: 0 },
  },
  { _id: false },
);

const FoundationProgramSchema = new Schema(
  {
    level1Details: { type: Schema.Types.Mixed, required: true, default: {} },
    level1Courses: { type: [FoundationCourseSchema], required: true, default: [] },
    level2Courses: { type: [FoundationCourseSchema], required: true, default: [] },
    heroTitleAr: { type: String, required: true, trim: true },
    heroTitleEn: { type: String, required: true, trim: true },
    heroSubtitleAr: { type: String, required: true, trim: true },
    heroSubtitleEn: { type: String, required: true, trim: true },
    overviewTitleAr: { type: String, required: true, trim: true },
    overviewTitleEn: { type: String, required: true, trim: true },
    overviewText1Ar: { type: String, required: true, trim: true },
    overviewText1En: { type: String, required: true, trim: true },
    overviewText2Ar: { type: String, required: true, trim: true },
    overviewText2En: { type: String, required: true, trim: true },
    admissionTitleAr: { type: String, required: true, trim: true },
    admissionTitleEn: { type: String, required: true, trim: true },
    admissionTextAr: { type: String, required: true, trim: true },
    admissionTextEn: { type: String, required: true, trim: true },
    studyTitleAr: { type: String, required: true, trim: true, default: "" },
    studyTitleEn: { type: String, required: true, trim: true, default: "" },
    studyNoteAr: { type: String, required: true, trim: true, default: "" },
    studyNoteEn: { type: String, required: true, trim: true, default: "" },
    visionSectionTitleAr: { type: String, required: true, trim: true },
    visionSectionTitleEn: { type: String, required: true, trim: true },
    visionTitleAr: { type: String, required: true, trim: true },
    visionTitleEn: { type: String, required: true, trim: true },
    visionTextAr: { type: String, required: true, trim: true },
    visionTextEn: { type: String, required: true, trim: true },
    missionTitleAr: { type: String, required: true, trim: true },
    missionTitleEn: { type: String, required: true, trim: true },
    missionTextAr: { type: String, required: true, trim: true },
    missionTextEn: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

if (process.env.NODE_ENV !== "production" && models.FoundationProgram) {
  delete models.FoundationProgram;
}

export const FoundationProgramModel = model(
  "FoundationProgram",
  FoundationProgramSchema,
);
