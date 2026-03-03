const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../config/dotenvConfig");
const { findByEmail, createUser } = require("../models/userModel");

const cookieOpts = {
  
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24,
};

async function register(req, res) {
  try {
    const { email, username, psw } = req.body;
    
    if (!email || !username || !psw) {
      return res.status(400).json({ error: "Valami hiányzik" });
    }
    const exists = await findByEmail(email);
    // console.log(exists);
    if (exists) {
      return res.status(409).json({ error: "valami már használt" });
    }

    const hash = await bcrypt.hash(psw, 10);

    const { insertId } = await createUser(username, email, hash);
    return res.status(201).json({ message: "Yup megy ez", insertId });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "DE MIÉRT NEM REGISZTRÁL" });
  }
}

async function login(req, res) {
  try {
    const { email, psw } = req.body;
    // console.log(email,psw);
    if (!email || !psw) {
      return res.status(400).json({ message: "email és jelszo is kell" });
    }
    const exists = await findByEmail(email);
    // console.log(exists);
    if (!exists) {
      return res
        .status(401)
        .json({ error: "Hibás bejelentkezés (Nem létezik)" });
    }
    const ok = await bcrypt.compare(psw, exists.psw);
    if (!ok) {
      return res.status(401).json({ error: "Hibás bejelentkezés (jelszo)" });
    }
    const token = jwt.sign(
      {
        user_id: exists.user_id,
        email: exists.email,
        username: exists.username,
        role: exists.role,
      },
      config.JWT_SECRET,
      { expiresIn: config.JWT_EXPIRES_IN }
    );
    // console.log(token);
    res.cookie(config.COOKIE_NAME, token, cookieOpts);
    return res.status(200).json({ message: "YIPPIE" });

  } catch (err) {
    return res
      .status(500)
      .json({ error: "Peti elbaszta a bejelentkezest", err });
  }
}

async function logout(req,res) {
  try {
      return res.clearCookie(config.COOKIE_NAME,{path: "/"}).status(200).json({message: "sikeres logout"})
  } catch (err) {
      return res.status(500).json({error:'logout server oldali hiba'})
  }
}

async function whoAmI(req,res) {
  
    try {
      const {user_id,username,email,role} = req.user
      return res.status(200).json({user_id: user_id,username: username, email: email,role: role})
    } catch (err) {
    return res.status(500).json({error:"whoAmI server hib",err})
  }

}




module.exports = { register, login,logout,whoAmI };
