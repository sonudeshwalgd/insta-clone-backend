import express from "express"
import mongoose from "mongoose"
import { router } from "./router/routers.js"

// mongoose.connect("mongodb+srv://sonu:zxcvbnm55@cluster0.gvplum5.mongodb.net/?retryWrites=true&w=majority",).then((res)=>{
// }).catch((err)=>{
//     console.log(err)
// })


const app=express()
// app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",router)


// https://insta-backend-ui8r.onrender.com



app.listen("3001",()=>console.log("started "))