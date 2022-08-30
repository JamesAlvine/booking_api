import Hostel from "../model/Hostel.js";

// create
export const createHostel = async (req, res, next) => {
  const newHostel = new Hostel(req.body);
  try {
    const savedHostel = await newHostel.save();
    res.status(200).json(savedHostel);
  } catch (err) {
    next(err);
  }
};

// update
export const updateHostel = async (req, res, next) => {
  try {
    const updateHostel = await Hostel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHostel);
  } catch (err) {
    next(err);
  }
};

// delet
export const deletHostel = async (req, res, next) => {
  try {
    await Hostel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hostel successfully deleted.");
  } catch (err) {
    next(err);
  }
};
// get
export const getHostel = async (req, res, next) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    res.status(200).json(hostel);
  } catch (err) {
    next(err);
  }
};
// get all
export const getHostels = async (req, res, next) => {
  try {
    const hostels = await Hostel.find();
    res.status(200).json(hostels);
  } catch (err) {
    next(err);
  }
};
