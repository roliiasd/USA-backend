const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {addanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,addanim)

module.exports = router