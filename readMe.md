# 📒 Usedanimals Backend Doku

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

## Tartalomjegyzék

- [Bevezetés](#bevezetés)
- [Projekt szerkezet](#projekt-szerkezet)
- [Adatbázis](#adatbázis)
- [Telepítés](#telepítés)
- [Használat](#használat)
- [Használt függőségek](#használt-függőségek)
- [Fejlesztési lehetőségek](#fejlesztési-lehetőségek)

---

## 🔗 Bevezetés

Ez a backend csatlakozik a [Frontendhez](https://github.com/roliiasd/USA-frontend), amely egy webshop-szerű weboldal.

Az oldalon előre „szeretett” állatokat lehet megtekinteni és örökbefogadni.

A projekt szerkezete úgy lett kialakítva, hogy a keresett végpontokat gyorsan és egyszerűen meg lehessen találni. Emellett könnyedén lehet újabb végpontokat is hozzáadni.

---

## 🏒 Projekt szerkezet

```text
├── config/
│   └── dotenvConfig.js
├── controllers/
│   ├── citiesController.js
│   ├── messagesController.js
│   ├── usedAnimalsController.js
│   └── userController.js
├── db/
│   └── db.js
├── middleware/
│   ├── adminMiddleware.js
│   ├── uploadMiddleware.js
│   └── userMiddleware.js
├── models/
│   ├── citiesModel.js
│   ├── messagesModel.js
│   ├── usedAnimalsModel.js
│   └── userModel.js
├── routes/
│   ├── citiesRoutes.js
│   ├── messagesRoutes.js
│   ├── usedAnimalsRoutes.js
│   └── userRoutes.js
├── socket/
│   └── chat.js
├── uploads/
│   └── userId/
│       └── kep-url
├── package-lock.json
├── package.json
├── server.js
└── README.md
```

---

## 🗃️ Adatbázis

A projekt MySQL adatbázist használ. Az adatbázis szerkezete és a kapcsolódó eszközök az alábbi táblázatban találhatók.

| Eszköz | Leírás | Link |
|---|---|---|
| 🎨 Figma | UI terv | [Megtekintés](https://www.figma.com/design/XbAhVv2L55v6RXQuZJMhkB/Usedanimals?node-id=0-1&p=f) |
| 💄 DrawSQL | Adatbázis diagram | [Megtekintés](https://drawsql.app/teams/sleepy-joe/diagrams/usedanimals) |
| 🧪 Postman | API tesztek | [Megtekintés](https://documenter.getpostman.com/view/48099676/2sBXqGq1rj) |

---

## ⬇️ Telepítés

NPM parancsok telepítéshez:

```bash
git clone https://github.com/roliiasd/USA-backend
cd USA-backend
npm install
```

---

## 🛍️ Használat

NPM parancs a szerver futtatásához:

```bash
npm run dev
```

> Az `npm install` parancsot csak egyszer kell futtatni, telepítés után.

---

## 📋 Használt függőségek

Szerveren használt npm modulok:

| Modul | Leírás |
|---|---|
| bcryptjs | Jelszavak titkosítása |
| cookie-parser | Cookie-k kezelése |
| cors | Cross-Origin kérések engedélyezése |
| dotenv | Környezeti változók kezelése |
| express | Szerver keretrendszer |
| jsonwebtoken | JWT alapú authentikáció |
| multer | Fájlfeltöltés kezelése |
| mysql2 | MySQL adatbázis kapcsolat |
| socket.io | Valós idejű kommunikáció |
| nodemon | Automatikus újraindítás (dev) |

---

## 📇 Fejlesztési lehetőségek

- Elfelejtett jelszó emailre való küldése
- Nándi elleni védelem (Ddos))
- Több profilbeállítási végpont