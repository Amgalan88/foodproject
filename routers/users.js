// import express from "express";
// import { getUsers } from "../resolvers/users/get-users.js";
// import { createUser } from "../resolvers/users/create-user.js";
// import { updatedUser } from "../resolvers/users/edit-users.js";

// export const router = express.Router();

// router.get("/", getUsers);
// router.post("/", createUser);
// router.put("/", updateUser);
// router.delete("/:id", deleteUser);
import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-user.js";
import { editUser } from "../resolvers/users/edit-user.js";
import { deleteUserById } from "../resolvers/users/delete-user-by-id.js";

export const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUserById);
