import expres from "express";
import Hostel from "../model/Hostel.js";

const router = expres.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHostel = new Hostel(req.body);
  try {
    const savedHostel = await newHostel.save();
    res.status(200).json(savedHostel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updateHostel = await Hostel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHostel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELET
router.delete("/:id", async (req, res) => {
  try {
    await Hostel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hostel successfully deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET
router.get("/:id", async (req, res) => {
  try {
    const hostel = await Hostel.findById(req.params.id);
    res.status(200).json(hostel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET ALL
router.get("/", async (req, res) => {
    try {
      const hostels = await Hostel.find();
      res.status(200).json(hostels);
    } catch (err) {
      res.status(500).json(err);
    }
  });

export default router;
