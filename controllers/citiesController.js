const {
  getcities,
  getcounties,
  getCitiesByCounty,
  getPostcodesByCity,
} = require("../models/citiesModel.js");

async function allcities(req, res) {
  try {
    const result = await getcities();
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Hiba az mc szeróval", err });
  }
}

async function allcounties(req, res) {
  try {
    const result = await getcounties();
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Hiba az mc szeróval", err });
  }
}
async function filteredCities(req, res) {
  try {
    const { id } = req.params;
    // console.log(`coutny id: ${id}`);

    const result = await getCitiesByCounty(id);
    // console.log("Városok száma:", result.length);
    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Hiba az mc szeróval", err });
  }
}

async function filteredPostcodes(req,res) {
  try {
    const id = req.params.id;
    const result = await getPostcodesByCity(id);

      return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Hiba az mc szeróval", err });
  }
}
module.exports = { allcities, allcounties, filteredCities,filteredPostcodes };
