import express from "express";
import cors from "cors";
// import morgan from "morgan";
import { logger } from "./mylogger.js";
import { router } from "./router.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { protect, comparePasswords } from "./modules/auth.js";
import path from "path";
import { fileURLToPath } from "url";

export const app = express();

app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

app.use(cookieParser());
app.use(helmet.hidePoweredBy());
app.use(cors());
// app.use(morgan("dev"));
app.use(logger);
app.use(express.json()); // no longer need body-parser; not needed after Express v4.16
app.use(express.urlencoded({ extended: true }));

// Recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  // console.log("req.cookies is ", req.cookies);
  // res.cookie("mycookie", "hello world");
  // res.send("🚚 Welcome to the Food Truck!");
  res.render("login", { title: "hello world", user: "Al" });
});

app.use("/api", protect, router);

app.use((err, req, res, next) => {
  res.status(500).json({ message: "internal svr err" });
});
