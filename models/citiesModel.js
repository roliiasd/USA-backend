const db = require( '../db/db')

async function getcities() {
    const sql = 'SELECT city FROM `cities` WHERE 1'
    const [result] = await db.query(sql)
    return result
}
async function getcounties(){
    const sql = 'SELECT * FROM `counties`;'
    const [result] = await db.query(sql)
    return result
}




module.exports = {getcities,getcounties}