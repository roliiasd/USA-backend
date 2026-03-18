const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {isAdmin} = require('../middleware/adminMiddleware.js')
const {allmessages,conversation,sendmessage, getMessages,deleteAny,deleteOwn} = require('../controllers/messagesController.js')



const router = express.Router()

router.get('/allmessages',auth,isAdmin,allmessages)
router.get('/conversation/:id',auth,conversation)
router.post('/sendmessage/:id',auth,sendmessage)
router.get('/:otherUserId', auth, getMessages)
router.delete('/delete/:messageId',auth,isAdmin,deleteAny) 
router.delete('/deleteown/:messageId',auth,deleteOwn)


module.exports = router