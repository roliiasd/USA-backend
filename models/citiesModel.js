const db = require("../db/db");

async function getcities() {
  const sql = "SELECT city FROM `cities` WHERE 1";
  const [result] = await db.query(sql);
  return result;
}
async function getcounties() {
  const sql = "SELECT * FROM `counties`;";
  const [result] = await db.query(sql);
  return result;
}
async function getCitiesByCounty(id) {
  const sql = "SELECT DISTINCT * FROM cities WHERE county_id = ? ORDER BY city ASC";
  const [result] = await db.query(sql, [id]);
  return result;
}

module.exports = { getcities, getcounties, getCitiesByCounty };
