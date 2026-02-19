const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true  
}))


app.use('/users',userRoutes)


module.exports = app