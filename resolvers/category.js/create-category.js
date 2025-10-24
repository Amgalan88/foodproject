import { category } from "../../models/category.mode.js";

export const CreateNewFoodCategory = async (req, res) => {
  try {
    const newCategory = await category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    console.error("❌ createnewfoodcategory error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
