import mongoose from "mongoose";

const user=mongoose.Schema({
    name:{
        type:String
    },
    file:{
        data:Buffer,
        contentType:String
    }


})

const userSchema =mongoose.model("user",user)
export default userSchema