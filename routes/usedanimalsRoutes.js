const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {addanim,getanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,addanim)
router.get('/getanimals',getanim)


module.exports = router

//commit my balls :)