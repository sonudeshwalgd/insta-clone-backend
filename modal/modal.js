import mongoose from "mongoose";

const user=mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

export default mongoose.Model("user",user)