import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(uri, { dbName: "data" });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`MongoDB connection error: ${err.message}`);
    } else {
      console.error("MongoDB connection error:", err);
    }
    process.exit(1);
  }
};

export default connectDB;
