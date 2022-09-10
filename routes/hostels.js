import expres from "express";
import {
  createHostel,
  deletHostel,
  getHostel,
  getHostels,
  updateHostel,
} from "../controllers/hostel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = expres.Router();

//CREATE
router.post("/", verifyAdmin, createHostel);
// UPDATE
router.put("/:id", verifyAdmin, updateHostel);
// DELET
router.delete("/:id", verifyAdmin, deletHostel);
// GET
router.get("/:id", getHostel);
// GET ALL
router.get("/", getHostels);

export default router;
