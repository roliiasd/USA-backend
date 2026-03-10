const express = require('express')
const {auth} = require('../middleware/userMiddleware.js')
const {allmessages,conversation,sendmessage} = require('../controllers/messagesController.js')


const router = express.Router()

router.get('/allmessages',/*Ide majd admin jogot pls -->*/auth,allmessages)
router.get('/conversation/:id',auth,conversation)
router.post('/sendmessage/:id',auth,sendmessage)



module.exports = router