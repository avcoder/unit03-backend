import express from "express";
import cors from "cors";
// import morgan from "morgan";
import { logger } from "./mylogger.js";
import { router } from "./router.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";

export const app = express();

app.use(cookieParser());
app.use(helmet.hidePoweredBy());
app.use(cors());
// app.use(morgan("dev"));
app.use(logger);
app.use(express.json()); // no longer need body-parser; not needed after Express v4.16
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("req.cookies is ", req.cookies);
  res.cookie("mycookie", "hello world");
  res.send("🚚 Welcome to the Food Truck!");
});

app.use("/api", router);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "internal svr err" });
});
