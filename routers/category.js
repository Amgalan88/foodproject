import express from "express";
import { CreateNewFoodCategory } from "../resolvers/category.js/create-category.js";
import { getcategory } from "../resolvers/category.js/get-category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", CreateNewFoodCategory);
categoryRouter.get("/", getcategory);
