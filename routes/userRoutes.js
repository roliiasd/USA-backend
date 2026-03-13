const express = require('express')
const { register,login,logout,whoAmI,editName,editPass } = require('../controllers/userController.js')
const {auth} = require('../middleware/userMiddleware.js')
const { route } = require('./usedanimalsRoutes.js')

const router = express.Router()

router.post('/register',register)

router.post('/login',login)

router.get('/whoami',auth,whoAmI)

router.post('/logout',auth,logout)

router.put('/editname',auth,editName)
router.put('/editpass',auth,editPass)
//comit my balls 

module.exports = router