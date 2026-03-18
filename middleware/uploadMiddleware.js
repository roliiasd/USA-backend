const multer = require('multer');
const fs = require('fs');
const path= require('path');

const maxFileSize = 5 * 1024 * 1024; // 5MB

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
    const userId = req.user?.user_id
    if (!userId) {
        return cb(new Error("A cigányok el lopták a userId-t"))
    }
    const uploadDir = path.join(process.cwd(),"uploads",String(userId))

    try {
        fs.mkdirSync(uploadDir, {recursive:true})
        cb(null,uploadDir)
    } catch (err) {
        return cb(new Error("Nem sikerült létrehozzni egy kurva mappát"),null)
    }
},
    filename: (req,file,cb)=>{
        const userId = req.user?.user_id
        if (!userId) {
            console.log(userId);
            return cb (new Error("A cigányok el lopták a logint"),null)
        }

       const rn = new Date().toISOString().split('T')[0]

       return cb(null,`${userId}_${rn}_${file.originalname}`)
    }

})

const upload = multer({
    storage: storage,
    limits: {fileSize: maxFileSize},
    fileFilter: (req,file,cb)=>{
        const fileTypes = /jpeg|jpg|png|gif|svg|webp|avif|bmp|tiff/ //haha Tuff xD
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
        const mimeType = fileTypes.test(file.mimetype)

        if (extName&&mimeType) {
            return cb(null,true)
        }
        return cb(new Error("Csak képet fogadunk el :)"),null);
    }})



    //
module.exports = {upload}