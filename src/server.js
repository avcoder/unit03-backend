import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
// import morgan from "morgan";
import { logger } from "./mylogger.js";
import { router } from "./router.js";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import User from "./models/user.js";

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

console.log(">> ", process.env.DB_CONN);

app.use(
  session({
    secret: process.env.PASSPORT_SECRET,
    key: process.env.PASSPORT_COOKIE_Key,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_CONN }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));

app.use("/", router);
