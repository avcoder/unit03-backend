import { Router } from "express";
import orderController from "./controllers/orderController.js";
import { body } from "express-validator";
import searchController from "./controllers/searchController.js";

// import { searchOrder } from "./handlers/search.js";

export const router = Router();

// Order
router.get("/order", orderController.getOrders);
router.delete("/order/:receipt_id", orderController.deleteOrder);
router.post("/order", [body("name").isString()], orderController.createOrder);
router.get("/order/:receipt_id", orderController.getOrderByReceiptId);
router.put("/order/:receipt_id", orderController.updateOrder);

// Search
// router.get("/search", searchController.search);
