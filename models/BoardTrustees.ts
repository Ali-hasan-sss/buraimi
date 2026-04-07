import { Schema, model, models } from 'mongoose';

const BoardTrusteeSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        role: { type: String, required: true, trim: true },
    },
    { timestamps: true }
);

export const BoardTrustee = models.BoardTrustee || model('BoardTrustee', BoardTrusteeSchema);
