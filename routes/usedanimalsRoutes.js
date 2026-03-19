const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {upload} = require('../middleware/uploadMiddleware.js')
const {addanim,getanim,filteranim,editanim,delanim} = require('../controllers/usedAnimalsContreoller.js')

const router = express.Router()

router.post('/addanimal',auth,upload.array("kep",5),addanim)
router.get('/getanimals',getanim)
router.get('/filteredanimals',filteranim)
router.put('/updateanimal',auth,upload.single("kep"),editanim)
router.delete('/deleteanimal/:id',auth,delanim)


module.exports = router
//valami nem commitolodot :(
//commit my balls :)