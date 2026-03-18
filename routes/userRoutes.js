const express = require('express')
const { register,login,logout,whoAmI,editName,editPass, allusers,chatpartners,findById,editrole } = require('../controllers/userController.js')
const {auth} = require('../middleware/userMiddleware.js')
const {isAdmin} = require('../middleware/adminMiddleware.js')


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
router.put('/editrole/:id',auth,isAdmin,editrole)
//comit my balls 

module.exports = router