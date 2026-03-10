const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {upload} = require('../middleware/uploadMiddleware.js')
const {addanim,getanim,filteranim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,upload.single("kep"),addanim)
router.get('/getanimals',getanim)
router.get('/filteredanimals',filteranim)


module.exports = router

//commit my balls :)