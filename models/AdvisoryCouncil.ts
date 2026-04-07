import { Schema, model, models } from 'mongoose';

const AdvisoryCouncilMemberSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        role: { type: String, required: true, trim: true },
        description: { type: String, trim: true, default: '' },
    },
    { timestamps: true }
);

export const AdvisoryCouncilMember =
    models.AdvisoryCouncilMember || model('AdvisoryCouncilMember', AdvisoryCouncilMemberSchema);
