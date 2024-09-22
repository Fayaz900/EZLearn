import express from 'express'
import { loginUserController, profileController, registerController, verifyUserController } from '../controller/userController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post("/user/register",registerController)
router.post("/user/verify",verifyUserController)
router.post("/user/login",loginUserController)
router.get("/user/me",isAuth,profileController)

export default router;