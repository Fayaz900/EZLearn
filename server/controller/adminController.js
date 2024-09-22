import ErrorHandle from "../middlewares/ErrorHandle.js";
import { coursesModel } from "../models/coursesModel.js";
import { LectureModel } from "../models/lectureModel.js";
import {rm} from 'fs'
import {promisify} from 'util'
import fs from 'fs'
import { userModel } from "../models/userModel.js";

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

export const deleteLecture = ErrorHandle(async(req,res)=>{
    const lecture = await LectureModel.findById(req.params.id)
    rm(lecture.video,()=>{
        console.log("Video deleted!");
    })
    await lecture.deleteOne()
    res.json({message:"Lecture Deleted"})
})

const unlinkAsync= promisify(fs.unlink)

export const deleteCourse=ErrorHandle(async(req,res)=>{
    const course = await coursesModel.findById(req.params.id)
    const lectures = await LectureModel.find({course: course._id})

    await Promise.all(
        lectures.map(async(lecture)=>{
            await unlinkAsync(lecture.video)
            console.log("Video Deleted");
        })
    );

    rm(course.image,()=>{
        console.log("image deleted!");
    })

    await LectureModel.find({course: req.params.id}).deleteMany()
    await coursesModel.deleteOne()
    await userModel.updateMany({},{$pull:{subscription:req.params.id}})

    res.json({
        message:"Course Deleted!"
    })
})