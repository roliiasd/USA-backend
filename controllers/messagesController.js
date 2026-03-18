const {getmessages,convMessages,postMessage, getMessagesBetweenUsers,DeleteAny,DeleteOwn} = require("../models/messagesModel.js")

async function allmessages(req,res){
    try {
        const result = await getmessages()
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}

async function conversation(req,res){
    try {
        const {id} = req.params
        const userId = req.user.user_id
        const result = await convMessages(id,userId)
        return res.status(200).json({result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}
async function sendmessage(req,res){
    try {
        const {id} = req.params
        const userId = req.user.user_id
        const {message} = req.body
        if(!message){
            return res.status(400).json({error:"Valami üzenetet küldj már azért gyerek"})
        }
        const result = await postMessage(id,userId,message)
        return res.status(200).json({message:"Sikeres üzenetküldés",result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
        
    }
}
async function getMessages(req,res) {
    try {
        const myId = req.user.user_id
        const otherId = req.params.otherUserId
        const messages = await getMessagesBetweenUsers(myId, otherId)
        // console.log(messages);
        return res.status(200).json(messages)
    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'bajvan ocsem, nemsikerult lekererni a uziket tesomsz'})
    }
}
async function deleteAny(req,res){
    try {
        const {messageId} = req.params
        const result = await DeleteAny(messageId)
        return res.status(204).json({message:"Sikeres törlés",result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
        
    }
    
}
async function deleteOwn(req,res) {
    try {
        const {messageId} = req.params
        const userId = req.user.user_id
        const result = await DeleteOwn(messageId,userId)
        return res.status(204).json({message:"Sikeres törlés",result})
    } catch (err) {
        console.log(err);
        return res.status(500).json({error:"Hiba az mc szeróval",err})
    }
}

module.exports = {allmessages,conversation,sendmessage, getMessages,deleteAny,deleteOwn} 