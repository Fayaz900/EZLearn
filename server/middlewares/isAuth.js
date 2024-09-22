import jwt from 'jsonwebtoken'
import { userModel } from '../models/userModel.js';

export const isAuth = async(req,res,next)=>{
    try {
        const token = req.headers.token;
        if(!token)
           return res.status(401).json({
                message:"Login First"
            })
        
            const decodedData= jwt.verify(token, process.env.JWT_SECRET);

            req.user = await userModel.findById(decodedData._id)
            next()
    } catch (error) {
        res.status(500).json({
            message:"Login First"
        })
    }
}