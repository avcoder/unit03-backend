import User from "../models/user.js";
import { hashPassword, comparePasswords } from "../modules/auth.js";

const createUser = async ({ username, password }) => {
  const user = await User.create({
    username,
    password: await hashPassword(password),
  });

  return user;
};

const loginUser = async ({ username, password }) => {
  const user = await User.findOne({ username });
  const isValid = await comparePasswords(password, user.password);

  return isValid ? user : null;
};

export default {
  createUser,
  loginUser,
};
