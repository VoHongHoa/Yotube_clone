import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";
const salt = bcrypt.genSaltSync(10);
export const signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, salt),
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (e) {
    //console.log(e);
    next(createError(404, "not found sorry!"));
  }
};
export const signin = async (req, res, next) => {
  //console.log(req.body);
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return next(createError(404, "user not found"));
  }
  const isCorrect = await bcrypt.compare(req.body.password, user.password);
  if (!isCorrect) {
    return next(createError(400, "wrong password"));
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT);
  const { password, ...others } = user._doc;
  res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(others);
  try {
  } catch (e) {
    //console.log(e);
    next(createError(404, "not found sorry!"));
  }
};
