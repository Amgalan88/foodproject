// import { users } from "./get-users.js";

// export const updatedUser = (req, res) => {
//   const updatedUser = req.body;
//   users = users.map((user) =>
//     user.id === updatedUser.id ? updatedUser : user
//   );
//   res.send("User updated successfully!");
// };
// import { User } from "../../model/user.model.js";

// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const user = await User.findByIdAndUpdate(id, updates, { new: true });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json(user);
//   } catch (err) {
//     console.error("❌ updateUser error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

import { User } from "../../src/model/user.model.js";
export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, phone } = req.body;

    const updated = await User.findByIdAndUpdate(
      id,
      { username, email, phone },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json({ message: "user updated succesfully", updated });
  } catch (err) {
    console.error("edit user error", err);
    res.status(500).json({ error: "internal server error" });
  }
};
