const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {isAdmin} = require('../middleware/adminMiddleware.js')
const {allmessages,conversation,sendmessage, getMessages} = require('../controllers/messagesController.js')


const router = express.Router()

router.get('/allmessages',isAdmin,allmessages)
router.get('/conversation/:id',auth,conversation)
router.post('/sendmessage/:id',auth,sendmessage)
router.get('/:otherUserId', auth, getMessages)


module.exports = router