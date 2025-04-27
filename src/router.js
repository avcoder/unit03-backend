import { Router } from "express";
import orderController from "./controllers/orderController.js";

// import { searchOrder } from "./handlers/search.js";

export const router = Router();

// Order
router.get("/order", orderController.getOrders);
router.delete("/order/:receipt_id", orderController.deleteOrder);
// router.get("/order/:receipt_id", orderController.getOrderByReceiptId);
// router.post("/order", orderController.createOrder);
// router.put("/order/:id", orderController.updateOrder);

// Search
// router.get("/search", searchController.search);
