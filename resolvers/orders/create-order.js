import { Order } from "../../models/Order.model.js";

export const CreateNewOrder = async (req, res) => {
  try {
    const newFoodorder = req.body;

    const createdFoodorder = await Order.create(newFoodorder);
    res.status(201).json(createdFoodorder);
  } catch (err) {
    console.error("order error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
