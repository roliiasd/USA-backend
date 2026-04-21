const {config} = require('./config/dotenvConfig')
const app = require('./app.js')
const http = require('http')
const {Server} = require('socket.io')
const {setupChat} = require('./socket/chat')
const PORT = config.PORT
const HOST = config.HOST

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true
    }
})
setupChat(io)
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);

})