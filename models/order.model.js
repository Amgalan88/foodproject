import mongoose from "mongoose";
const { Schema, model } = mongoose;

// 🧩 Захиалгын дэд (subdocument) schema
const foodOrderedItemsSchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "Food",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

// 🧾 Гол Order schema
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    foodOrderedItems: [foodOrderedItemsSchema], // ← жижиг үсгээр!
  },
  { timestamps: true } // createdAt, updatedAt автоматаар үүснэ
);

// ✅ Давхар бүртгэлээс хамгаалах (overwrite error сэргийлнэ)
export const Order = mongoose.models.Order || model("Order", orderSchema);
