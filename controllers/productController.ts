import { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 30;
    const skip = parseInt(req.query.skip as string) || 0;

    const products = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();

    res.json({ products, total, skip, limit });
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const limit = parseInt(req.query.limit as string) || 30;
    const skip = parseInt(req.query.skip as string) || 0;

    const products = await Product.find({ category }).skip(skip).limit(limit);
    const total = await Product.countDocuments({ category });

    res.json({ products, total, skip, limit });
  } catch (err) {
    res.status(500).json({ message: err instanceof Error ? err.message : err });
  }
};

