import expres from "express"
const router= expres.Router();

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



export default router