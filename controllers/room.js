import Room from "../model/Room.js";
import Hostel from "../model/Hostel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hostelId = req.params.hostelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hostel.findByIdAndUpdate(hostelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

// update
export const updateRoom = async (req, res, next) => {
    try {
      const updateRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateRoom);
    } catch (err) {
      next(err);
    }
  };
  
  // delet
  export const deletRoom = async (req, res, next) => {
    try {
      await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  // get
  export const getRoom = async (req, res, next) => {
    try {
      const room = await Room.findById(
        req.params.id
      );
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  };
  // get all
  export const getRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };
  