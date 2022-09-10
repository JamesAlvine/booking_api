import expres from "express";
import { deletUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verfyToken, veryAdmin, veryUser } from "../utils/verifyToken.js";

const router = expres.Router();

router.get("/checkauthentication",verfyToken,(req,res,next)=>{
    res.send("Hello user, you are logged in ")
})
router.get("/checkuser/:id",veryUser,(req,res,next)=>{
    res.send("Hello user, you are logged in and can delet your account ")
})

router.get("/checkadmin/:id",veryAdmin,(req,res,next)=>{
    res.send("Hello admin, you are logged in and can delet all accounts ")
})

// UPDATE
router.put("/:id", updateUser);
// DELET
router.delete("/:id", deletUser);
// GET
router.get("/:id", getUser);
// GET ALL
router.get("/", getUsers);

export default router;
