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

export const verifyUserController = ErrorHandle(async(req,res)=>{
    const {otp,activationToken} = req.body;

    const verify=jwt.verify(activationToken,process.env.ACTIVATION_SECRET)
    if(!verify) return res.status(400).json({message:"OTP Expired"})
    if(verify.otp !==otp) return res.status(400).json({message:"Wrong OTP"})

    await userModel.create({
        name: verify.user.name,
        email: verify.user.email,
        password: verify.user.password,
    })

    res.json({
        message:"User registered"
    })
})

export const loginUserController = ErrorHandle(async(req,res)=>{
    const {email,password}=req.body;
    const user = await userModel.findOne({email})
    if(!user) return res.status(400).json({message:"No user with this email"})

    const matchPassword = await bcrypt.compare(password, user.password);
    if(!matchPassword) return res.status(400).json({message:"Wrong Password"})
    
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{
        expiresIn:"15d"
    })

    res.json({
        message:`Welcome back ${user.name}`,
        token,
        user
    })
})

export const profileController = ErrorHandle(async(req,res)=>{
    const user = await userModel.findById(req.user._id)
    res.json({user})
})