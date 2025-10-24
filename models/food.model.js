import mongoose from "mongoose";
const { Schema, model } = mongoose;

const foodSchema = new mongoose.Schema({
  foodname: { type: String, trim: true },
  price: { type: Number },
  image: { type: String },
  ingredients: { type: String },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category", // ← энэ бол холбоосын нэр (Category model-ийн нэртэй яг адил байх ёстой)
    required: true,
  },
});

export const Food = mongoose.model("Food", foodSchema);
