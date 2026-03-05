const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {allcities,allcounties} = require('../controllers/citiesController.js')


const router = express.Router()

router.get('/allcities',allcities)
router.get('/allcounties',allcounties)

module.exports = router