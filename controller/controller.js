import userSchema from "../modal/modal.js"
import multer from "multer"


 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

export const getHomepage=async (req,res)=>{
    // res.send("chl to gya ")
    res.render("index.ejs")
}  
export const postHomepage=async (req,res)=>{
    console.log(req.body)
    const newData= new userSchema(req.body)
    newData.save()
    res.send(req.body)
}  
export const fileUploader=async (req,res)=>{
    var obj = {
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/');
        }
    });
}

 