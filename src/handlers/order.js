import Order from "../models/order.js";

// Get all
const getAllOrders = async () => {
  return await Order.find().lean();
};

// Get one
const getOrderById = async (req, res) => {
  const data = await Order.find({ receipt_no: req.params.id });
  res.json(data);
};

// Create one
const createOrder = async (req, res) => {
  const order = req.body;
  res.json({ order });
};

// Delete one
const deleteOrder = async (req, res) => {
  const deleted = { id: req.params.id };
  res.json({ deleted });
};

// Update one
const updateOrder = async (req, res) => {
  // const updated =
  res.json(req.body);
};

export default {
  getAllOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
};
