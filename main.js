import express from "express";
import mongoose from "mongoose";

import { foodRouter } from "./routers/foods.js";
import { orderRouter } from "./routers/orders.js";
import { userRouter } from "./routers/users.js";
import { categoryRouter } from "./routers/category.js";

const app = express();
const PORT = 8000;

mongoose
  .connect(
    "mongodb+srv://amgalan88:123123aa@cluster0.fbocqjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

app.use(express.json());
app.use("/users", userRouter);
app.use("/foods", foodRouter);
app.use("/orders", orderRouter);
app.use("/category", categoryRouter);

//server alive?-------
app.listen(PORT, () => {
  console.log(`✅server starting http://localhost:${PORT}`);
});
