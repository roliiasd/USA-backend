
const {createanim,allAnimals,filteredAnim,editedAnim,deletedAnim,addImages,getanimById} = require("../models/usedAnimalsModel")

async function allanim(req,res) {
    try {
        const result = await allAnimals()
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba a MesterMc allAnimals szeróval",err})
    }
}


async function addanim(req,res) {
    try {
        
        const {nev,varos,megjegyzes,postcode,megye} = req.body
        
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "Legalább 1 képet fel kell tölteni" })
        }

        if (!nev || !varos || !megjegyzes || !postcode || !megye) {
            return res.status(400).json({ error: "nev, varos, megjegyzes, postcode és megye is kell" })
        }


        const { animalId } = await createanim(
            req.user.user_id, nev, varos, megjegyzes, postcode, megye
        )

        const urls = req.files.map(file => `uploads/${req.user.user_id}/${file.filename}`)
        
        await addImages(animalId, urls)
        
            return res.status(200).json({message:"Sikeres feltöltés",animalId})

    } catch (err) {
        console.log(err);
         return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}

async function getanim(req, res) {
    try {
        const { animalId } = req.params
        const animal = await getanimById(animalId)

        if (!animal) {
            return res.status(404).json({ error: "Állat nem található" })
        }

        return res.status(200).json(animal)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Szerverhiba", err })
    }
}

async function filteranim(req,res) {
    try {
        const {megye,varos} = req.body
        const result = await filteredAnim(megye,varos)
        return res.status(200).json({result})
    } catch (err) {
        return res.status(500).json({error:"Hiba a MesterMc Filter szeróval",err})
    }
}

async function editanim(req,res) {
    try {
        const {nev,varos,megjegyzes,postcode,megye,id} = req.body
        const kep = `uploads/${req.user.user_id}/${req.file.filename}`
        const result = await editedAnim(nev,kep,varos,megjegyzes,postcode,megye,id)
        return res.status(200).json({result})
    } catch (err) { 
        console.log(err);
        return res.status(500).json({error:"Hiba a MesterMc edit szeróval",err})
    }
}
async function delanim(req,res) {
    try {
        const id = req.params.id
        const result = await deletedAnim(id)
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba a MesterMc delete szeróval",err})
    }
}

//valami nem commitolodot :(
module.exports = {addanim,getanim,filteranim,editanim,delanim,allanim}