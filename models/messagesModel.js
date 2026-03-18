const db = require("../db/db");

async function getmessages() {
  const sql = "SELECT * FROM messages";
  const [result] = await db.query(sql);
  return result;
}
async function convMessages(id, userId) {
  const sql =
    "SELECT messages FROM `messages` WHERE giver = ? AND reciver = ? ORDER BY created_at;";
  const [result] = await db.query(sql, [userId, id]);
  return result;
}
async function postMessage(id, userId, message) {
  const sql =
    "INSERT INTO `messages` (message_id,giver, reciver, messages,created_at) VALUES (NULL,?, ?, ?,current_timestamp());";
  const [result] = await db.query(sql, [userId, id, message]);
  return result;
}

async function getMessagesBetweenUsers(myId, otherId) {
  const sql = `SELECT * FROM messages 
                 WHERE (giver = ? AND reciver = ?) 
                    OR (giver = ? AND reciver = ?)
                 ORDER BY created_at ASC`;
    const [messages] = await db.query(sql, [myId, otherId, otherId, myId])
    return messages
}
async function DeleteAny(message_id) {
    const sql = "DELETE FROM messages WHERE message_id = ?"
    const [result] = await db.query(sql, [message_id])
    return result
  
}
async function  DeleteOwn(message_id,user_id) {
  const sql = "DELETE FROM messages WHERE message_id = ? AND giver = ?"
  const [result] = await db.query(sql, [message_id,user_id])
  return result
  
}
module.exports = { getmessages, convMessages, postMessage, getMessagesBetweenUsers,DeleteAny,DeleteOwn };
