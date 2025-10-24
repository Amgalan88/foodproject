// src/routers/orders.js
import express from "express";
import { CreateNewOrder } from "../resolvers/orders/create-order.js";
import { getOrder } from "../resolvers/orders/get-order.js";

export const orderRouter = express.Router();

orderRouter.post("/", CreateNewOrder);
orderRouter.get("/", getOrder);
