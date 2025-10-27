import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    phoneNumber: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
  },
  { timestamps: true } // createdAt, updatedAt автоматаар үүснэ
);

// Давхар бүртгэлээс хамгаалах
export const Users = mongoose.models.User || model("User", userSchema);
