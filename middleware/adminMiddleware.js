const db = require("../db/db");

async function isAdmin(req, res, next) {
    try {
      const [rows] = await db.query(
        "SELECT role FROM user WHERE user_id = ?",
        [req.user.user_id]
      );
  
      if (rows[0].role !== "admin") {
        return res.status(403).json({ message: "Nincs admin jogosultságod!" });
      }
  
      next();
    } catch (err) {
      console.error("Admin middleware hiba:", err);
      return res.status(500).json({ message: "Szerverhiba!" });
    }
  }

module.exports = {isAdmin}