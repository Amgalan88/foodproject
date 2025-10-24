import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodcategorySchema = new mongoose.Schema({
  category: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const category = mongoose.model("Food", foodcategorySchema);
