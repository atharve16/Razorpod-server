import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
    slug: string;
    name: string;
    url: string;
}

const CategorySchema: Schema = new Schema<ICategory>(
    {
        slug: { type: String, required: true },
        name: { type: String, required: true },
        url: String,
    },
    { collection: "categories" }
);

export default mongoose.model<ICategory>("Category", CategorySchema);
