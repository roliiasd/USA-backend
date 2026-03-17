const db = require("../db/db");

async function allUsers() {
  const sql = "SELECT user_id, username FROM user";
  const [result] = await db.query(sql);
  return result;
}

async function findByEmail(email) {
  const sql = "SELECT * FROM user WHERE email = ?";
  const [result] = await db.query(sql, [email]);
  // console.log(result);
  return result[0] || null;
}

async function createUser(username, email, hash) {
  const sql =
    'INSERT INTO user(user_id, username, email, psw,role ) VALUES (NULL,?,?,?,"user")';
  const [result] = await db.query(sql, [username, email, hash]);
  return { insertId: result.insertId };
}

async function editUsername(nev, user_id) {
  const sql = "UPDATE user SET username = ? WHERE user_id = ?";
  // console.log("SQL:", sql);
  // console.log("Paraméterek:", nev, user_id);
  const [result] = await db.query(sql, [nev, user_id]);
  // console.log("UPDATE result:", result);
  return result;
}
async function editPassword(psw, user_id) {
  const sql = "UPDATE user SET psw = ? WHERE user_id = ?";
  const [result] = await db.query(sql, [psw, user_id]);
  return result;
}
async function findByName(username) {
  const sql = "SELECT * FROM user WHERE username = ?";
  const [result] = await db.query(sql, [username]);
  // console.log(result);
  return result[0] || null;
}

async function chatPartners(user_id) {
  
  const sql = "SELECT DISTINCT user.user_id, user.username FROM user JOIN messages ON (messages.giver = user.user_id OR messages.reciver = user.user_id) WHERE (messages.giver = ? OR messages.reciver = ?) AND user.user_id != ?;"
  const [result] = await db.query(sql, [user_id, user_id, user_id]);
  
  return result;
}
async function FindById(user_id) {
  log
  const sql = 'SELECT user_id, username FROM user WHERE user_id = ?'
  const [result] = await db.query(sql, [user_id])
  return result[0] || null
}

module.exports = {
  findByEmail,
  createUser,
  editUsername,
  editPassword,
  findByName,
  allUsers,
  chatPartners,
  FindById
};
