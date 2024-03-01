//default 
const multer = require('multer');
const fs = require('fs');
const { resourceLimits } = require('worker_threads');


const myStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        let path = "./public/uploads/"
        if (!fs.existsSync(path)){
            fs.mkdirSync(path,{recursive:true});
        }

        cb(null, path);
    },
    filename: (req, file, cb) =>{
        //filename.ext
        // 123546321654
        let ext = (file.originalname.split(".")).pop() //[a,b,c,d,jpg]
        // let name = Date.now()+file.originalname;
        let name = Date.now()+"."+ext;
        cb(null, name);
    }
})

const imageFilter = (req, file, cb) =>{
    let allowed = ['jpg','jpeg','png','gif','bmp','webp','svg']
    let ext =  (file.originalname.split(".")).pop()
    if(allowed.includes(ext.toLowerCase())){
        cb(null,true)
    } else{
        cb({code:400, msg: "File format not supported"}, null)
    }
}

const uploader = multer({
    storage: myStorage,
    fileFilter : imageFilter,
    limits :{
        fileSize: 5000000
    }

})

module.exports = uploader;