import { User } from "../../models/user.model1.js";

// 🧩 Хэрэглэгч үүсгэх
export const createUser = async (req, res) => {
  try {
    const { username, phoneNumber, email } = req.body;

    // validation (жижигхэн шалгалт)
    if (!username || !phoneNumber || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await User.create({ username, phoneNumber, email });

    res.status(201).json(newUser);
  } catch (err) {
    console.error("❌ createUser error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
