import { Food } from "../../models/food.model.js";

export const editFood = async (req, res) => {
  try {
    const { id } = req.params;
    const { foods } = req.params;

    const updated = await Food.findByIdAndUpdate(id, { foods }, { new: true });
    if (!updated) return res.status(404).json({ error: " not found" });
    res.json({ message: "food updated succesfully", updated });
  } catch (err) {
    console.error("edit user error", err);
    res.status(500).json({ error: "internal server error" });
  }
};
