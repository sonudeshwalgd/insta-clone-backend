import userSchema from "../modal/modal.js"

export const getHomepage=async (req,res)=>{
    res.send("chl to gya ")
    // res.render("index.ejs")
}  
export const postHomepage=async (req,res)=>{
    console.log(req.body)
    const newData= new userSchema(req.body)
    newData.save()
    res.send(req.body)
}  