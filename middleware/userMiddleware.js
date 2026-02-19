const jwt = require('jsonwebtoken')
const {config} = require('../config/dotenvConfig')


function auth(req,res,next) {
    //console.log(req);
    const token = req.cookies?.[config.COOKIE_NAME]
    if (!token) {
        return res.status(401).json({error:"Nincsen cookie"})
    }
    try {
        req.user = jwt.verify(token, config.JWT_SECRET)
        next()
    } catch (err) {
        return res.status(401).json({error: "Érvénytelen Token"})
    }
}

module.exports = {auth}