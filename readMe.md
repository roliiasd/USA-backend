
# 📒 Usedanimals Backend Doku
/// Backend




```markdown
## Tartalomjegyzék

- [Bevezetés](#bevezetés)
- [Projeckt szerkezet](#Projeckt-szerkezet)
- [Adatbázis](#adatbazis)
- [Telepítés](#telepites)
- [Használat](#hasznalat)
- [Fejlesztési lehetőségek](#fejlesztesi-lehetőségek)
```

## 🔗 Bevezetés

```markdown
Ez a backend csatlakozik a [Frontendhez](https://github.com/roliiasd/USA-frontend). Ami egy webshop szerü weboldal. Előre "szerettet" állatokat lehet találni és örökbefogadni. 

Szerkezet szempontjábol fel lett tagolva hogy gyorsan és egyszerüen meg lehesen találni keresett végpontokat. Könnyedén lehet akár újjab végpontokat is fel vinni.

```


## 🏒 Projekt szerkezet

```markdown
├── config/
│   └── dotenvConfig.js/
│   
├── controllers/
│   ├── citiesController.js
│   ├── messagesController.js
│   ├── usedAnimalsController.s
│   └── userController.js
│
├── db/
│   └──db.js
│
├─ middleware/
│   ├──adminMiddleware.js
│   ├──uploadMiddleware.js
│   └──userMiddleware.js
│
├─ models/
│   ├── citesModel.js
│   ├── messagesModel.js
│   ├── usedAnimalsModel.js
│   └── userModel.js
│
├─ routes/
│   ├─ citiesRoutes.js
│   ├─ messagesRoutes.js
│   ├─ usedanimalsRoutes.js
│   └── userRoutes.js
│
├── socket/
│   └── chat.js
│
├── uploads/ *(ha már vannak képek)*
│   └── userId
│       └── *Kép url*
│ 
├── package-lock.json
├── package.json
├── server.js
└── README.md
```


**Példa gyakorlatban:**

```markdown
| 🎨 Figma | UI terv | [Megtekintés](https://www.figma.com/design/XbAhVv2L55v6RXQuZJMhkB/Usedanimals?node-id=0-1&p=f) |
| 💄️ DrawSQL | Adatbázis diagram | [Megtekintés](https://drawsql.app/teams/sleepy-joe/diagrams/usedanimals) |
| 🧪 Postman | API tesztek | [Megtekintés](https://documenter.getpostman.com/view/48099676/2sBXqGq1rj) |
```

## ⬇️ Telepítés

NPM parancsok telepítéshes:

```markdown
git clone https://github.com/roliiasd/USA-backend (GitHub-ról letöltés)
```

## 🛍️ Használat

NPM parancs a szerver futtatásához:
```markdown
npm install (Csak egyszer kell, telepítés után!)
npm run dev (Szerver futtatása.)
```

## 📋 Használt függőségek
Szerveren használt npm modulok:
```markdown
- Bcryptjs
- Cookie-parser
- Cors
- Dotenv
- Express
- Jsonwebtoken
- Multer
- Mysql2
- Socket.io
- Nodemon(Dev)
```

## 📇 Fejlesztési lehetőségek

```markdown
- Elfelejtett jelszó email-re való küldése.
- Nándi-tól való védelem (DDos)
- Több profil beálításnak a végpontjai
```

