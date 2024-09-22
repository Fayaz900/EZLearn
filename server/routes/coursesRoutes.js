import express from "express";
import { fetchLecture, fetchLecturesController, getAllCoursesController, getSingleCourseController } from "../controller/coursesController.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.get('/course/all',getAllCoursesController)
router.get('/course/:id',getSingleCourseController)
router.get('/lectures/:id',isAuth,fetchLecturesController)
router.get('/lecture/:id',isAuth,fetchLecture) // to fetch a single lecture

export default router;