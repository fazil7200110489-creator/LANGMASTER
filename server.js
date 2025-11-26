import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Routes from "./Router/Routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// ❗ THIS MUST BE BEFORE ANY ROUTE
app.use(express.json());  

connectDB();

// ROUTES
app.use("/api/auth", Routes);

app.listen(port, () => {
  console.log(`Server connected successfully on http://localhost:${port}`);
});
