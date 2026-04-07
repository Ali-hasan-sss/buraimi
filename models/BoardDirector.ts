import { Schema, model, models } from 'mongoose';

const BoardDirectorSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        role: { type: String, required: true, trim: true },
    },
    { timestamps: true }
);

export const BoardDirector = models.BoardDirector || model('BoardDirector', BoardDirectorSchema);
