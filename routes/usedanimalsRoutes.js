const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {upload} = require('../middleware/uploadMiddleware.js')
const {addanim,getanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,upload.single("kep"),addanim)
router.get('/getanimals',getanim)


module.exports = router

//commit my balls :)