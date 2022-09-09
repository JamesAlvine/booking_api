import expres from "express"
const router= expres.Router();
import {  deletUser, getUser, getUsers, updateUser } from "../controllers/user";


// UPDATE
router.put("/:id", updateUser);
// DELET
router.delete("/:id",deletUser);
// GET
router.get("/:id",getUser);
// GET ALL
router.get("/", getUsers);

export default router