
const {createanim} = require("../models/usedAnimalsModel")


async function addanim(req,res) {
    try {
        // console.log("req.user:", req.user)
        // console.log("req.user.user_id:", req.user?.user_id)
        const {nev,kep,varos,megjegyzes} = req.body
        
        
        
        if (!nev || !kep || !varos || !megjegyzes) {
            return res.status(400).json({error:"nev, kep, varos, megjegyzes kell"})
        }
        const {animalId} = await createanim(req.user.user_id,nev,kep,varos,megjegyzes)


            return res.status(200).json({message:"Sikeres feltöltés",animalId})
    } catch (err) {
        console.log(err);
         return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}


module.exports = {addanim}