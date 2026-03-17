const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { config } = require("../config/dotenvConfig");
const {
  findByEmail,
  createUser,
  findByName,
  allUsers
} = require("../models/userModel");

const cookieOpts = {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24,
};
async function  allusers(req, res) {
  try {
    const  result = await allUsers()
    console.log(result);
    return  res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ error: 'vagy ures es skizo vagy vagy csak gatyesz a szeronak' });
    
  }
}

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

async function logout(req, res) {
  try {
    return res
      .clearCookie(config.COOKIE_NAME, { path: "/" })
      .status(200)
      .json({ message: "sikeres logout" });
  } catch (err) {
    return res.status(500).json({ error: "logout server oldali hiba" });
  }
}

async function whoAmI(req, res) {
  try {
    const { user_id, username, email, role } = req.user;
    return res
      .status(200)
      .json({ user_id: user_id, username: username, email: email, role: role });
  } catch (err) {
    return res.status(500).json({ error: "whoAmI server hib", err });
  }
}

async function editName(req, res) {
  try {
    const { nev } = req.body;

    if (nev === req.user.username) {
      return res.status(400).json({error: 'Igy hivnak most te szenilis'})
    }


    // console.log("Kapott név:", nev);
    // console.log("Saját user_id:", req.user.user_id);
    const exists = await findByName(nev);
    // console.log("exists eredmény:", exists);

    if (exists && exists.user_id !== req.user.user_id) {
      return res
        .status(409)
        .json({ error: "Ez a felhasználónév már foglalt!" });
    }
    const { result } = await editUsername(nev, req.user.user_id);
    const token = jwt.sign(
      {
        user_id: req.user.user_id,
        email: req.user.email,
        username: nev,
        role: req.user.role,
      },

      config.JWT_SECRET,
      { expiresIn: config.JWT_EXPIRES_IN }
    );
    // console.log(token);
    res.cookie(config.COOKIE_NAME, token, cookieOpts);
    return res.status(200).json({ message: "sikeres edit", result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error:
        "edit mc szerver nem fut mert dani gépén rendesen ki van kapcsolva és emiatt nem tud futtni a szerver amin menne az mc Bukkit szerver",
      err,
    });
  }
}
async function editPass(req, res) {
  try {
    const { psw } = req.body;
    const hash = await bcrypt.hash(psw, 10);

    const { result } = await editPassword(hash, req.user.user_id);

    return res.status(200).json({ message: "sikeres edit", result });
  } catch (err) {
    return res.status(500).json({
      error:
        "edit mc szerver nem fut mert dani gépén rendesen ki van kapcsolva és emiatt nem tud futtni a szerver amin menne az mc Bukkit szerver",
      err,
    });
  }
}

module.exports = { register, login, logout, whoAmI, editName, editPass, allusers };
