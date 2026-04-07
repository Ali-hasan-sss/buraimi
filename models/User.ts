// models/User.ts
import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    age: { type: Number, required: false },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: false },
}, { timestamps: true });

// Crucial: check if model exists before creating it to avoid Next.js errors
export const User = models.User || model('User', UserSchema);