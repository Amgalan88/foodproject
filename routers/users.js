import express from "express";
import { createUser } from "../resolvers/users/create-user.js";
import { deleteUserById } from "../resolvers/users/delete-user-by-id.js";
import { editUser } from "../resolvers/users/edit-user.js";
import { getUsers } from "../resolvers/users/get-users.js";

export const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUserById);
userRouter.put("/:id", editUser);
