
const {createanim,allAnimals} = require("../models/usedAnimalsModel")


async function addanim(req,res) {
    try {
        // console.log("req.user:", req.user)
        // console.log("req.user.user_id:", req.user?.user_id)
        const {nev,varos,megjegyzes,postcode,megye} = req.body
        console.log(nev,varos,megjegyzes,postcode,megye);
        const kep = `uploads/${req.user.user_id}/${req.file.filename}`
        console.log(kep);
        
        
        
        if (!nev || !kep || !varos || !megjegyzes || !postcode ||!megye) {
            return res.status(400).json({error:"nev, kep, varos, megjegyzes és postcode is kell"})
        }
        const {animalId} = await createanim(req.user.user_id,nev,kep,varos,megjegyzes,postcode,megye)


            return res.status(200).json({message:"Sikeres feltöltés",animalId})
    } catch (err) {
        console.log(err);
         return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}

async function getanim(req,res) {
    try {
        const result = await allAnimals()
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
       return res.status(500).json({error:"Hiba az mc szeróval",err})
    }

}


module.exports = {addanim,getanim}