import { Category } from "../../models/category.model.js";

export const createCategory = async (req, res) => {
  try {
    const newcategory = req.body;
    const createdCategory = await Category.create(newcategory);
    res.status(201).json(createdCategory);
  } catch (err) {
    console.error("createnewfood error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
