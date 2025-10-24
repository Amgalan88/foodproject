import { Order } from "../../models/Order.model.js";

export const getOrder = async (_req, res) => {
  try {
    const orders = await Order.find()
      .populate({ path: "user" }) // ✅ populate by field name
      .populate({
        path: "foodOrderedItems.food",
        select: "foodname price category",
      }) // ✅ дэд талбар
      .lean();

    res.json(orders);
  } catch (err) {
    console.error("❌ getOrder error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
