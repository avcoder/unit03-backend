import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  order: [String],
  isReady: {
    type: Boolean,
    default: false,
  },
  receiptId: String,
});

export default mongoose.model("order", orderSchema);
