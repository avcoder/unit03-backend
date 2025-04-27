import orderHandler from "../handlers/order.js";

const getOrders = async (req, res) => {
  const orders = await orderHandler.getAllOrders();
  res.status(200).json(orders);
};

const deleteOrder = async (req, res) => {
  const receiptId = req.params.receipt_id;
  await orderHandler.deleteOrder(receiptId);
  res.status(204).json({ ok: true });
};

export default {
  getOrders,
  deleteOrder,
};
