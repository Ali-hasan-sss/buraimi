import { Schema, model, models } from "mongoose";

const OrganizationalStructureSchema = new Schema(
  {
    sectionTitleAr: { type: String, required: true, trim: true },
    sectionTitleEn: { type: String, required: true, trim: true },
    sectionSubtitleAr: { type: String, required: true, trim: true },
    sectionSubtitleEn: { type: String, required: true, trim: true },
    chartTitleAr: { type: String, required: true, trim: true },
    chartTitleEn: { type: String, required: true, trim: true },
    chartImageAr: { type: String, required: true, trim: true },
    chartImageEn: { type: String, required: true, trim: true },
    aboutTitleAr: { type: String, required: true, trim: true },
    aboutTitleEn: { type: String, required: true, trim: true },
    aboutTextAr: { type: String, required: true, trim: true },
    aboutTextEn: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export const OrganizationalStructureModel =
  models.OrganizationalStructure ||
  model("OrganizationalStructure", OrganizationalStructureSchema);
