const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {isAdmin} = require('../middleware/adminMiddleware.js')
const {allmessages,conversation,sendmessage, getMessages,deleteAny,deleteOwn,deleteconv} = require('../controllers/messagesController.js')



const router = express.Router()

router.get('/allmessages',auth,isAdmin,allmessages)
router.get('/conversation/:id',auth,conversation)
router.post('/sendmessage/:id',auth,sendmessage)
router.get('/:otherUserId', auth, getMessages)
router.delete('/delete/:messageId',auth,isAdmin,deleteAny) 
router.delete('/deleteown/:messageId',auth,deleteOwn)
router.delete('/deleteconv/:otherUserId',auth,deleteconv)


module.exports = router