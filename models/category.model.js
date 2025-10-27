import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema(
  { category: { type: String, required: true, trim: true, unique: true } },
  { timestamps: true }
);

// 🔑 Нэр нь "Category" БАЙХ ЁСТОЙ
export const Category =
  mongoose.models.Category || mongoose.model("Category", CategorySchema);
