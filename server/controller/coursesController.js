import ErrorHandle from "../middlewares/ErrorHandle.js";
import { coursesModel } from "../models/coursesModel.js";
import { LectureModel } from "../models/lectureModel.js";
import { userModel } from "../models/userModel.js";

export const getAllCoursesController = ErrorHandle(async(req,res)=>{
    const courses = await coursesModel.find();
    res.json({
        courses,
    })
})

export const getSingleCourseController= ErrorHandle(async(req,res)=>{
    const course = await coursesModel.findById(req.params.id);
    res.json({
        course,
    })
})

export const fetchLecturesController = ErrorHandle(async(req,res)=>{
    const lectures = await LectureModel.find({course:req.params.id});

    const user = await userModel.findById(req.user._id);
    if(user.role==="admin"){
        return res.json({lectures});
    }
    if(!user.subscription.includes(req.params.id)) return res.status(400).json({
        message:"You have not subscribed to this course"
    })
    res.json({lectures})
})

export const fetchLecture=ErrorHandle(async(req,res)=>{
    const lecture = await LectureModel.findById(req.params.id)

    const user = await userModel.findById(req.user._id);
    if(user.role==="admin"){
        return res.json({lecture});
    }
    if(!user.subscription.includes(req.params.id)) return res.status(400).json({
        message:"You have not subscribed to this course"
    })
    res.json({lecture})
})