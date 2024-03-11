import mongoose,{Schema, mongo} from "mongoose";
const userSchema=new Schema(
    {

},
{timestamps:true})
export const User=mongoose.model("User",userSchema)