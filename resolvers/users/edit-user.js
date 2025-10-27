import { Users } from "../../models/user.model1.js";

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { editUser } = req.body;

    const updated = await Users.findByIdAndUpdate(
      id,
      { editUser },
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.json({ message: "user updated succesfully", updated });
  } catch (err) {
    console.error("edit user error", err);
    res.status(500).json({ error: "internal server error" });
  }
};
