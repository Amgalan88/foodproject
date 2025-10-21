// import { users } from "./get-users.js";

// export const deletedUser = (req, res) => {
//   const id = req.params.id;
//   users = users.filter((user) => user.id != id);
//   res.send("User deleted succesfully!");
// };

// import { User } from "../../model/user.model.js";
// import { Model } from "mongoose";

// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const user = await User.findByIdAndDelete(id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json({ message: "User deleted successfully" });
//   } catch (err) {
//     console.error("❌ deleteUser error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// import express from "express";
// import User from "../model/user.model.js";

// export const router = express.Router();

// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("🆔 Deleting user with id:", id); // ← log шалгах
//     const deleted = await User.findByIdAndDelete(id);

//     if (!deleted) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.json({ message: "User deleted successfully!", deleted });
//   } catch (err) {
//     console.error("❌ Delete error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
import { User } from "../../src/model/user.model.js";
import mongoose from "mongoose";

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    let deleted;
    if (mongoose.isValidObjectId(id)) {
      deleted = await User.findByIdAndDelete(id);
    } else {
      deleted = await User.findOneAndDelete({ _id: id });
    }

    if (!deleted) return res.status(404).json({ error: "User not found" });

    res.json({ message: "User deleted successfully", deletedId: deleted._id });
  } catch (err) {
    console.error("❌ deleteUserById error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
