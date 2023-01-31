import mongoose from "mongoose";

const user=mongoose.Schema({
    name:{
        type:String
    },
    video:{
        type:Media
    }

})

const userSchema =mongoose.model("user",user)
export default userSchema