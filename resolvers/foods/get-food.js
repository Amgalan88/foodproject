import { Food } from "../../models/food.model.js";

export const getFoods = async (req, res) => {
  try {
    const food = await Food.find().populate("category");
    res.json(food);
  } catch (err) {
    console.error("❌ getUsers error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
