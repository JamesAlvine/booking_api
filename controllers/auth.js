import User from "../model/User.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // password hashing
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

// login function

export const login = async (req, res, next) => {
  try {
    // password hashing
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = Jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.jwt_token
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token",token,{
      httpOnly:true,
    }).status(200).json({ ...otherDetails });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
