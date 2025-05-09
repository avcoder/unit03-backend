import userHandler from "../handlers/user.js";
import { createJWT } from "../modules/auth.js";
import User from "../models/user.js";
import passport from "passport";

const registerForm = async (req, res) => {
  res.render("register", { title: "Register" });
};

const register = (req, res) => {
  console.log("in register");
  console.log("username: ", req.body.username);
  console.log("password: ", req.body.password);
  User.register(
    new User({
      username: req.body.username,
    }),
    req.body.password,
    (err, newUser) => {
      if (err) {
        console.log("something errored: ", err);
        res.redirect("/register");
      } else {
        console.log("should gooto login");
        res.redirect("/login");
      }
    }
  );
};

const login = (req, res, next) => {
  console.log("in login");

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log("authentication error:", err);
      return next(err);
    }

    if (!user) {
      console.log("user not found or invalid credentials");
      return res.redirect("/login"); // or send an error message
    }

    req.logIn(user, (err) => {
      if (err) {
        console.log("login error:", err);
        return next(err);
      }
      console.log("login successful");
      return res.redirect("/api/order"); // redirect after successful login
    });
  })(req, res, next);
};

const loginForm = async (req, res) => {
  res.render("login", { title: "Login" });
};

const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userHandler.createUser({ username, password });
    const token = createJWT(user);

    res.status(201).json({ token });
  } catch (e) {
    console.log(e);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await userHandler.loginUser({ username, password });

  if (!user) {
    res.status(401);
    res.json({ message: "invalid password" });
    return;
  }

  const token = createJWT(user);
  res.status(200).json({ token });
};

export default {
  login,
  createUser,
  loginUser,
  registerForm,
  register,
  loginForm,
};
