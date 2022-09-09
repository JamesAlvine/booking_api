import expres from "express";
import {
  createHostel,
  deletHostel,
  getHostel,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";
const router = expres.Router();

// ?????
//CREATE
router.post("/", createHostel);
// UPDATE
router.put("/:id", updateHostel);
// DELET
router.delete("/:id", deletHostel);
// GET
router.get("/:id", getHostel);
// GET ALL
router.get("/", getHostels);

export default router;
