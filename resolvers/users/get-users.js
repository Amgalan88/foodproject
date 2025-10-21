import { User } from "../../src/model/user.model.js"; // Модель замаа зөв шалга

export const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // MongoDB-оос бүх хэрэглэгчийг татна
    res.json(users);
  } catch (err) {
    console.error("❌ getUsers error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
