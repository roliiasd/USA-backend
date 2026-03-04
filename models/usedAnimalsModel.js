const db = require( '../db/db')

async function createanim(user_id,nev,kep,varos,megjegyzes) {
    const sql = 'INSERT INTO usedanimals (id, userId, nev, kep, varos, megjegyzes) VALUES (NULL, ?, ?, ?, ?, ?)'
    const [result] = await db.query(sql,[user_id,nev,kep,varos,megjegyzes])
    return {animalId: result.insertId}
}

async function allAnimals() {
    const sql = 'SELECT user.username,nev,kep,varos,megjegyzes FROM `usedanimals` inner JOIN user ON user.user_id = usedanimals.userId;'
    const [result] = await db.query(sql)
    return result
}

module.exports = {createanim,allAnimals}