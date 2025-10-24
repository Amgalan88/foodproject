import express from "express";
import { CreateNewFood } from "../resolvers/foods/create-food.js";
import { getFoods } from "../resolvers/foods/get-food.js";
import { editFood } from "../resolvers/foods/edit-food.js";
import { deleteFoodById } from "../resolvers/foods/delete-food.js";

export const foodRouter = express.Router();

foodRouter.post("/", CreateNewFood);
foodRouter.get("/", getFoods);
foodRouter.put("/:id", editFood);
foodRouter.delete("/:id", deleteFoodById);
