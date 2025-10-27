import { Category } from "../../models/category.model.js";

export const getCategory = async (req, res) => {
  try {
    const category = await Category.find().populate("category");
    res.json(category);
  } catch (err) {
    console.error("❌ getcategory error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
