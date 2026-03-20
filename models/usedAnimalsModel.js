
const db = require( '../db/db')

async function createanim(user_id, nev, varos, megjegyzes, postcode, megye) {
    const sql = `INSERT INTO usedanimals (id, userId, nev, varos, megjegyzes, postcode, megye) 
                 VALUES (NULL, ?, ?, ?, ?, ?, ?)`
    const [result] = await db.query(sql, [user_id, nev, varos, megjegyzes, postcode, megye])
    
    return { animalId: result.insertId }
}
async function getanimById(animalId) {
    const animalSql = `SELECT * FROM usedanimals WHERE id = ?`
    const [animal] = await db.query(animalSql, [animalId])

    if (animal.length === 0) return null

    const imagesSql = `SELECT id, url FROM images WHERE animal_id = ?`
    const [images] = await db.query(imagesSql, [animalId])

    return { ...animal[0], images }
}


async function addImages(animalId, urls) {
    const sql = `INSERT INTO images (id, animal_id, url) VALUES (NULL, ?, ?)`
    const promises = urls.map(url => db.query(sql, [animalId, url]))
    await Promise.all(promises)
}

async function allAnimals() {
    const sql = 'SELECT usedanimals.id,usedanimals.userId, user.username,usedanimals.nev,usedanimals.varos,usedanimals.megjegyzes,usedanimals.postcode,usedanimals.megye,images.url,user.role, images.id as "imageId" FROM usedanimals INNER JOIN user ON user.user_id = usedanimals.userId INNER JOIN images ON usedanimals.id = images.animal_id;';
    const [result] = await db.query(sql)
    return result
}
async function filteredAnim(megye,varos) {
    const sql = `SELECT user.username,usedanimals.nev,usedanimals.kep,cities.city AS varos,usedanimals.megjegyzes,cities.postcode,counties.county AS megye FROM usedanimals INNER JOIN user ON user.user_id = usedanimals.userId INNER JOIN cities ON usedanimals.postcode = cities.postcode INNER JOIN counties ON cities.county_id = counties.id WHERE counties.county = ? AND cities.city = ?`;
    const [result] = await db.query(sql,[megye,varos])
    return result
}
async function editedAnim(nev,varos,megjegyzes,postcode,megye,animalId) {
    console.log(nev,varos,megjegyzes,postcode,megye,animalId);
    if (!nev ||!varos || !megjegyzes || !postcode ||!megye) {
        
        throw new Error("nev, kep, varos, megjegyzes és postcode is kell")
        
    }
    const sql = 'UPDATE usedanimals SET nev= ?,varos= ?,megjegyzes= ?,postcode= ?,megye = ?  WHERE id = ?'


    const [result] = await db.query(sql,[nev,varos,megjegyzes,postcode,megye ,animalId])
        return result
    
}
async function editImage(kep,id,imageId) {
    const sql = 'UPDATE images SET url = ? WHERE animal_id = ? AND id = ?'
    console.log(kep,id,imageId);
    const [result] = await db.query(sql,[kep,id,imageId])
    return result
    
}



async function deletedAnim(id) {
    const sql = 'DELETE FROM usedanimals WHERE id = ?'
    const [result] = await db.query(sql,[id])
    return result
}

//valami nem commitolodot :(
module.exports = {createanim,allAnimals,filteredAnim, editedAnim,deletedAnim,addImages,getanimById,editImage}