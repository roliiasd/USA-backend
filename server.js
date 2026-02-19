const {config} = require('./config/dotenvConfig')
const app = require('./app.js')

const PORT = config.PORT
const HOST = config.HOST


app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);

})