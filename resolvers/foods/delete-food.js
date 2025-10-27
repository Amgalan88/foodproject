import { foods } from "../../models/food.model.js";

import mongoose from "mongoose";

export const deleteFoodById = async (req, res) => {
  try {
    const { id } = req.params;

    let deleted;
    if (mongoose.isValidObjectId(id)) {
      deleted = await foods.findByIdAndDelete(id);
    } else {
      deleted = await foods.findOneAndDelete({ _id: id });
    }

    if (!deleted) return res.status(404).json({ error: "Food not found" });

    res.json({ message: "food deleted successfully", deletedId: deleted._id });
  } catch (err) {
    console.error("❌ deleteFoodById error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
