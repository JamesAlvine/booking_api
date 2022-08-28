import expres from "express"
const router= expres.Router();

router.get("/", (req,res)=>{
    res.send("Hello this is auth endpoin")
})

export default router