import expres from "express"
const router= expres.Router();

//CREATE
router.post("/",(req,res)=>{
    try{

    }catch(err)
    {
        res.status(500).json(err)
    }
})
// UPDATE
// DELET
// GET
// GET ALL

export default router