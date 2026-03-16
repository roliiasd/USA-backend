const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {allmessages,conversation,sendmessage, getMessages} = require('../controllers/messagesController.js')


const router = express.Router()

router.get('/allmessages',/*Ide majd admin jogot pls -->*/auth,allmessages)
router.get('/conversation/:id',auth,conversation)
router.post('/sendmessage/:id',auth,sendmessage)
router.get('/:otherUserId', auth, getMessages)


module.exports = router