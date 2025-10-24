import { Food } from "../../models/food.model.js";

export const CreateNewFood = async (req, res) => {
  try {
    const newFood = req.body;
    const createdFood = await Food.create(newFood);
    res.status(201).json(createdFood);
  } catch (err) {
    console.error("createnewfood error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
