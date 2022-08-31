import expres from "express"
import { register } from "../controllers/auth.js";
const router= expres.Router();

router.get("/register",register)

export default router