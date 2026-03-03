const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const usedanimalsRoutes = require('./routes/usedanimalsRoutes')


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true  
}))


app.use('/users',userRoutes)

app.use('/animals',usedanimalsRoutes)


module.exports = app