import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    slug: { type: String, required: true },
    name: { type: String, required: true },
    url: String,
  },
  { collection: "categories" }
);

export default mongoose.model("Category", CategorySchema);
