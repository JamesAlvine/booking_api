import User from "../model/User.js";

// update
export const updateUser = async (req, res, next) => {
  try {
    const updateuser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

// delet
export const deletUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User successfully deleted.");
  } catch (err) {
    next(err);
  }
};
// get
export const getUser = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
// get all
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
