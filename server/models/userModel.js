import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "user"
    },
    subscription:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    }],
})

export const userModel=mongoose.model("User",userSchema)