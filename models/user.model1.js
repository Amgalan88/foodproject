import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
  },
  { timestamps: true } // createdAt, updatedAt автоматаар үүснэ
);

// Давхар бүртгэлээс хамгаалах
export const User = mongoose.models.User || model("User", userSchema);
