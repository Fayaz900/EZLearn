import ErrorHandle from "../middlewares/ErrorHandle.js";
import { coursesModel } from "../models/coursesModel.js";

export const createCourseController = ErrorHandle(async(req,res)=>{
    const {title, description, category, createdBy, duration, price} =req.body;

    const image = req.file;
    await coursesModel.create({
        title,
        description,
        category,
        createdBy,
        image: image?.path,
        duration,
        price
    });
    res.status(201).json({
        message:"Course created succesfully"
    })
})