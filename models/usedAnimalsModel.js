
const db = require( '../db/db')

async function createanim(user_id,nev,kep,varos,megjegyzes,postcode,megye) {
    const sql = 'INSERT INTO usedanimals (id, userId, nev, kep, varos, megjegyzes,postcode,megye) VALUES (NULL, ?, ?, ?, ?, ?,?,?)'
    const [result] = await db.query(sql,[user_id,nev,kep,varos,megjegyzes,postcode,megye])
    console.log(result);
    return [result]
}


async function allAnimals() {
    const sql = 'SELECT id,userId, user.username,nev,kep,varos,megjegyzes,postcode,megye FROM `usedanimals` inner JOIN user ON user.user_id = usedanimals.userId;'
    const [result] = await db.query(sql)
    return result
}
async function filteredAnim(megye,varos) {
    const sql = `SELECT user.username,usedanimals.nev,usedanimals.kep,cities.city AS varos,usedanimals.megjegyzes,cities.postcode,counties.county AS megye FROM usedanimals INNER JOIN user ON user.user_id = usedanimals.userId INNER JOIN cities ON usedanimals.postcode = cities.postcode INNER JOIN counties ON cities.county_id = counties.id WHERE counties.county = ? AND cities.city = ?`;
    const [result] = await db.query(sql,[megye,varos])
    return result
}
async function editedAnim(nev,kep,varos,megjegyzes,postcode,megye,id) {
    if (!nev || !kep || !varos || !megjegyzes || !postcode ||!megye) {
        console.log(nev,kep,varos,megjegyzes,postcode,megye);
        throw new Error("nev, kep, varos, megjegyzes és postcode is kell")
        
    }
    const sql = 'UPDATE usedanimals SET nev= ?,kep= ?,varos= ?,megjegyzes= ?,postcode= ?,megye = ?  WHERE id = ?'
    const [result] = await db.query(sql,[nev,kep,varos,megjegyzes,postcode,megye ,id])
        return result
    
}

module.exports = {createanim,allAnimals,filteredAnim, editedAnim}