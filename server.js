import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();


app.use(cors({
    origin: "https://razorpod.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use("/api", productRoutes);

app.listen(8080, () => console.log(`🚀 Server running on http://localhost:8080`));
