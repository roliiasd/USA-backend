const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {upload} = require('../middleware/uploadMiddleware.js')
const {addanim,getanim,filteranim,editanim,delanim,allanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal', auth, upload.array("url",5), addanim)
router.get('/allanimals',allanim)
router.get('/animal/:animalId', getanim)
router.get('/filteredanimals',filteranim)
router.put('/updateanimal',auth,upload.single("kep"),editanim)
router.delete('/deleteanimal/:id',auth,delanim)


module.exports = router

//commit my balls :)