import express from "express"
import mongoose from "mongoose"
import { router } from "./router/routers.js"

// mongoose.connect("mongodb://localhost:27017/usreData",).then((res)=>{
// }).catch((err)=>{
//     console.log(err)
// })

const app=express()
app.use(express.urlencoded({extended:true}))
app.use("https://insta-backend-ui8r.onrender.com/",router)




app.listen("3001",()=>console.log("started "))