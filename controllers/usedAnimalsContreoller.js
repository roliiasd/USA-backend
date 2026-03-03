const {createanim} = require("../models/usedAnimalsModel")


async function addanim(req,res) {
    try {
        const {nev,kep,varos,megjegyzes} = req.body
        const user_id = req.user.user_id
        if (!nev || !kep || !varos || !megjegyzes) {
            return res.status(400).json({error:"nev, kep, varos, megjegyzes kell"})
        }
        const {animalId} = await createanim(user_id,nev,kep,varos,megjegyzes)


            return res.status(200).json({message:"Sikeres feltöltés",animalId})
    } catch (err) {
        console.log(err);
         return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}


module.exports = {addanim}