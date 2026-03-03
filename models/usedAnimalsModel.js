const db = require( '../db/db')

async function createanim(user_id,nev,kep,varos,megjegyzes) {
    const sql = 'INSERT INTO usedanimals (id, userId, nev, kep, varos, megjegyzes) VALUES (NULL, ?, ?, ?, ?, ?)'
    const [result] = await db.query(sql,[user_id,nev,kep,varos,megjegyzes])
    return {animalId: result.insertId}
}

module.exports = {createanim}