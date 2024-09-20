import { userModel } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sendMail from "../middlewares/sendMail.js"
import ErrorHandle from "../middlewares/ErrorHandle.js";

export const registerController = ErrorHandle(async(req,res)=>{
    const {email, name, password} = req.body
    let user = await userModel.findOne({email})
    if(user) return res.status(400).json({
        message:"User already exist",
    })

    const hashPassword = await bcrypt.hash(password, 10)

    user={
        name,
        email,
        password: hashPassword,
    }

    const otp=Math.floor(Math.random()*1000000)
    
    const activationToken = jwt.sign({
        user,
        otp,
    }, process.env.ACTIVATION_SECRET,{
        expiresIn:"5m",
    })

    const data={
        name,
        otp,
    };

    await sendMail(
        email,
        "EZ Learning",
        data
    )

    res.status(200).json({
        message:"OTP Sent to email",
        activationToken
    })
})

export const verifyUser = ErrorHandle(async(req,res)=>{

})