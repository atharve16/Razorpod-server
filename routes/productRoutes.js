import express from "express";
import {
  getProducts,
  getProduct,
  getCategories,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.get("/categories", getCategories);
router.get("/products/category/:category", getProductsByCategory);

export default router;
