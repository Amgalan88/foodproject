import { Users } from "../../models/user.model1.js";

import mongoose from "mongoose";

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    let deleted;
    if (mongoose.isValidObjectId(id)) {
      deleted = await Users.findByIdAndDelete(id);
    } else {
      deleted = await Users.findOneAndDelete({ _id: id });
    }

    if (!deleted) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User deleted successfully", deletedId: deleted._id });
  } catch (err) {
    console.error("❌ deleteUserById error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
