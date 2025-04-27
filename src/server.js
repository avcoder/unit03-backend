import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./router.js";

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // no longer need body-parser; not needed after Express v4.16
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("🚚 Welcome to the Food Truck!");
});

app.use("/api", router);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
