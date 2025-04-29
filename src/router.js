import { Router } from "express";
import orderController from "./controllers/orderController.js";
import searchController from "./controllers/searchController.js";

// import { searchOrder } from "./handlers/search.js";

export const router = Router();

// Order
router.get("/order", orderController.getOrders);
router.delete("/order/:receipt_id", orderController.deleteOrder);
router.post("/order", orderController.createOrder);
router.get("/order/:receipt_id", orderController.getOrderByReceiptId);
// router.put("/order/:id", orderController.updateOrder);

// Search
// router.get("/search", searchController.search);
