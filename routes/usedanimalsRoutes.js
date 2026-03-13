const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {upload} = require('../middleware/uploadMiddleware.js')
const {addanim,getanim,filteranim,editanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,upload.single("kep"),addanim)
router.get('/getanimals',getanim)
router.get('/filteredanimals',filteranim)
router.put('/updateanimal',auth,upload.single("kep"),editanim)


module.exports = router

//commit my balls :)