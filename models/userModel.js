const { edit } = require('../controllers/userController')
const db = require( '../db/db')

    async function findByEmail(email) {
    const sql = 'SELECT * FROM user WHERE email = ?'
    const [result] = await db.query(sql, [email])
    // console.log(result);
    return result[0] || null
}

    async function createUser(username,email,hash) {
    const sql = 'INSERT INTO user(user_id, username, email, psw,role ) VALUES (NULL,?,?,?,"user")'
    const [result] = await db.query(sql,[username,email,hash])
    return {insertId: result.insertId}
    
}

async function editUser(nev,psw,user_id) {
    const sql = 'UPDATE user SET username = ?, psw = ? WHERE user_id = ?'
    const [result] = await db.query(sql, [nev,psw,user_id])
    return result
}

module.exports = {findByEmail,createUser,editUser} 