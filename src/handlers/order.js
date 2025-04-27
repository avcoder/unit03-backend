import Order from "../models/order.js";

// Get all
const getAllOrders = async () => {
  return await Order.find().lean();
};

// Get one
const getOrderByReceiptId = async (receiptId) => {
  return await Order.findOne({ receipt_no: receiptId });
};

// Create one
const createOrder = async (req, res) => {
  const order = req.body;
  res.json({ order });
};

// Delete one
const deleteOrder = async (receiptId) => {
  return await Order.deleteOne({ receipt_id: receiptId });
};

// Update one
const updateOrder = async (req, res) => {
  // const updated =
  res.json(req.body);
};

export default {
  getAllOrders,
  getOrderByReceiptId,
  createOrder,
  deleteOrder,
  updateOrder,
};
