import expres from "express";
import { deletUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = expres.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, you are logged in ")
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, you are logged in and can delet your account ")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello admin, you are logged in and can delet all accounts ")
// })

// UPDATE
router.put("/:id",verifyUser, updateUser);
// DELET
router.delete("/:id",verifyUser, deletUser);
// GET
router.get("/:id",verifyUser, getUser);
// GET ALL
router.get("/",verifyAdmin, getUsers);

export default router;
