
# 📒 Markdown Cheat Sheet / Sablon Gyűjtemény
/// Backend




```markdown
## Tartalomjegyzék

- [Bevezetés](#bevezetés)

- [Használat](#használat)
- [Dokumentáció](#dokumentáció)
- [Közreműködés](#közreműködés)
- [Licenc](#licenc)
```




## 🧯 Címsorok

```markdown
# H1: Nagy címsor
## H2: Fejezet
### H3: Alfejezet
#### H4: Kisebb fejezet
```

## ✍️ Szövegformázás

```markdown
**Félkövér szöveg**
*Dőlt szöveg*
~~Áthúzott szöveg~~
`Egysoros kód kiemelés`
```

## 📃 Listák

**Rendezetlen:**

```markdown
- Első pont
- Második pont
  - Behúzott pont
```

**Számozott:**

```markdown
1. Első lépés
2. Második lépés
3. Harmadik lépés
```

## 💡 Idézetek

```markdown
> Ez egy idézet, megjegyzés vagy kiemelés.
```

## 🚧 Elválasztó vonal

```markdown
---
```

## 📾 Táblázatok

**Alap táblázat:**

```markdown
| Fejléc 1 | Fejléc 2 | Fejléc 3 |
|----------|----------|----------|
| Tartalom 1 | Tartalom 2 | Tartalom 3 |
| Sor 2, oszlop 1 | Sor 2, oszlop 2 | Sor 2, oszlop 3 |
```

**Igazítás:**

```markdown
| Balra igazított | Középre igazított | Jobbra igazított |
|:----------------|:----------------:|----------------:|
| Tartalom | Tartalom | Tartalom |
```

**Példa gyakorlatban:**

```markdown
| Eszköz | Leírás | Link |
|--------|---------|------|
| 🎨 Figma | UI/UX terv | [Megtekintés](https://www.figma.com/design/XbAhVv2L55v6RXQuZJMhkB/Usedanimals?node-id=0-1&p=f) |
| 💄️ DrawSQL | Adatbázis diagram | [Megtekintés](https://drawsql.app/teams/sleepy-joe/diagrams/usedanimals) |
| 🧪 Postman | API tesztek | [Megtekintés](https://documenter.getpostman.com/view/48099676/2sBXqGq1rj) |
```

## 🔗 Linkek

```markdown
[Link szövege](https://pelda.com)
```

**Gyakorlati példa:**

```markdown
👉 [Figma terv megtekintése](https://www.figma.com/design/XbAhVv2L55v6RXQuZJMhkB/Usedanimals?node-id=0-1&p=f)
```

## 🗄️ Képek beillesztése

```markdown
![Alternatív szöveg](https://pelda.com/kep.png)
```

## 🔥 Badge-ek (GitHub statikus jelvények)

Badge generálás: [https://shields.io/](https://shields.io/)

```markdown
[![Licence](https://img.shields.io/badge/Licence-MIT-green.svg)](https://opensource.org/licenses/MIT)
```

## 📦 Kódblokk

**Többsoros kód blokk:**

````markdown
```bash
npm install
npm start
```
````


## 🌟 Emoji használat

Egyszerűen bemásolod az emojit:

```
🚀 🎨 🧯 📝 🧪 ✅ ⚙️
```

Vagy Markdown shortcode:

```
:rocket: → 🚀
:checkered_flag: → 🏁
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
├── package-lock.json
├── package.json
├── server.js
└── README.md
```
