import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();


app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use("/api", productRoutes);

app.listen(8080, () => console.log(`🚀 Server running on http://localhost:8080`));
