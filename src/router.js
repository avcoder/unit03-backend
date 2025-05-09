import { Router } from "express";
import orderController from "./controllers/orderController.js";
import userController from "./controllers/userController.js";
import { body } from "express-validator";
// import searchController from "./controllers/searchController.js";

// import { searchOrder } from "./handlers/search.js";

export const router = Router();

router.get("/", (req, res) => {
  // console.log("req.cookies is ", req.cookies);
  // res.cookie("mycookie", "hello world");
  // res.send("🚚 Welcome to the Food Truck!");
  res.render("login", { title: "hello world", user: "Al" });
});

// Order
router.get("/api/order", orderController.getOrders);
router.delete("/api/order/:receipt_id", orderController.deleteOrder);
router.post(
  "/api/order",
  [body("name").isString()],
  orderController.createOrder
);
router.get("/api/order/:receipt_id", orderController.getOrderByReceiptId);
router.put("/api/order/:receipt_id", orderController.updateOrder);

router.get("/register", userController.registerForm);
router.post("/register", userController.register);

router.get("/login", userController.loginForm);
router.post("/login", userController.login);

// Search
// router.get("/search", searchController.search);
