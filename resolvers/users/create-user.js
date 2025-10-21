// import { users } from "./get-users.js";

// export const createUser = (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.send("New user added!");
// };
import { User } from "../../src/model/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const user = new User({ username, email, phone });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error("createUser error", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
