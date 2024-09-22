import ErrorHandle from "../middlewares/ErrorHandle.js";
import { coursesModel } from "../models/coursesModel.js";
import { LectureModel } from "../models/lectureModel.js";

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

export const addLecturesController = ErrorHandle(async(req,res)=>{
    const course = await coursesModel.findById(req.params.id)
    if(!course) return res.status(404).json({
        message:"No course with this id",
    })

    const {title, description}= req.body;
    const file = req.file;
    const lecture = await LectureModel.create({
        title,
        description,
        video: file?.path,
        course:course._id,
    });
    res.status(201).json({
        message:"Lecture added succesfully",
        lecture
    })
})