import express from "express";
import mongoose from "mongoose";
import { router } from "./routers/users.js";

const app = express();
const PORT = 8000;

mongoose
  .connect(
    "mongodb+srv://amgalan88:123123aa@cluster0.fbocqjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ Connection error:", err));

app.use(express.json());
// router okey?----------
app.use("/users", router);

//server alive?-------
app.listen(PORT, () => {
  console.log(`✅aslaa http://localhost:${PORT}`);
});
