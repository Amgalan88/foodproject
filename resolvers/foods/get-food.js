import { foods } from "../../models/food.model.js";

export const getFoods = async (req, res) => {
  try {
    const food = await foods.find().populate("Category");
    res.json(food);
  } catch (err) {
    console.error("❌ getUsers error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
