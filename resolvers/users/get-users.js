import { User } from "../../models/user.model1.js";

// 🧩 Хэрэглэгчдийн жагсаалт авах
export const getUsers = async (_req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).lean();
    res.json(users);
  } catch (err) {
    console.error("❌ getUsers error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
