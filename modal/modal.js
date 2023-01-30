import mongoose from "mongoose";

const user=mongoose.Schema({
    name:{
        type:String
    }

})

const userSchema =mongoose.model("user",user)
export default userSchema