import { category, Category } from "../../models/category.model.js";

export const getcategory = async (req, res) => {
  try {
    const newcategory = await category.find();
    res.json(newcategory);
  } catch (err) {
    console.error("❌ getUsers error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
