import orderHandler from "../handlers/order.js";

const getOrders = async (req, res) => {
  const orders = await orderHandler.getAllOrders();
  res.status(200).json(orders);
};

export default { getOrders };
