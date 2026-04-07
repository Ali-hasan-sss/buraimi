import { Schema, model, models } from 'mongoose';

const CollegeCouncilMemberSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        role: { type: String, required: true, trim: true },
        description: { type: String, trim: true, default: '' },
    },
    { timestamps: true }
);

export const CollegeCouncilMember =
    models.CollegeCouncilMember || model('CollegeCouncilMember', CollegeCouncilMemberSchema);
