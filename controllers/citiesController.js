const {getcities,getcounties} = require("../models/citiesModel.js")

async function allcities(req,res) {
    try {
        const result = await getcities()
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
    }

}

async function allcounties(req,res) {
    try {
        const result = await getcounties()
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
    }

}

module.exports = {allcities,allcounties}