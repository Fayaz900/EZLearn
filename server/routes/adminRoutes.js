import express from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import { addLecturesController, createCourseController } from "../controller/adminController.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post('/course/new',isAuth,isAdmin,uploadFiles,createCourseController)
router.post('/course/:id',isAuth,isAdmin,uploadFiles,addLecturesController)

export default router;