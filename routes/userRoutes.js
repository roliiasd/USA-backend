const express = require('express')
const { register,login,logout,whoAmI,editName,editPass, allusers,chatpartners,findById } = require('../controllers/userController.js')
const {auth} = require('../middleware/userMiddleware.js')


const router = express.Router()
router.get('/allusers', auth, allusers)
router.post('/register',register)

router.post('/login',login)

router.get('/whoami',auth,whoAmI)

router.post('/logout',auth,logout)

router.put('/editname',auth,editName)
router.put('/editpass',auth,editPass)

router.get('/chat-partners',auth,chatpartners)
router.get('/:id',auth,findById)
//comit my balls 

module.exports = router