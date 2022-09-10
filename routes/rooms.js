import expres from "express"
import {
    createRoom,
    deleteRoom,
    updateRoomAvailability,
    getRoom,
    getRooms,
    updateRoom,
  } from "../controllers/room.js";
  import { verifyAdmin } from "../utils/verifyToken.js";
const router= expres.Router();

//CREATE
router.post("/:hostelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hostelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);


export default router