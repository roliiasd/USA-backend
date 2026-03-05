const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {allcities,allcounties, filteredCities} = require('../controllers/citiesController.js')


const router = express.Router()

router.get('/allcities',allcities)
router.get('/allcounties',allcounties)
router.get('/citiesbycounty/:id',filteredCities)

module.exports = router