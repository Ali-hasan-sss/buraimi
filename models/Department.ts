import { Schema, model, models } from "mongoose";

const DepartmentSchema = new Schema(
  {
    domain: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    titleAr: { type: String, required: true, trim: true },
    titleEn: { type: String, required: true, trim: true },
    subTitleAr: { type: String, required: true, trim: true },
    subTitleEn: { type: String, required: true, trim: true },
    headMessage: { type: Schema.Types.Mixed, default: {} },
    programs: { type: [Schema.Types.Mixed], default: [] },
    facultyMembers: { type: [Schema.Types.Mixed], default: [] },
    showcaseImage: { type: String, trim: true, default: "" },
  },
  { timestamps: true },
);

export const DepartmentModel =
  models.Department || model("Department", DepartmentSchema);
