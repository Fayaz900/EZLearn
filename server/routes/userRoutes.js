import express from 'express'
import { registerController, verifyUser } from '../controller/userController.js';

const router = express.Router();

router.post("/user/register",registerController)
router.post("/user/verify",verifyUser)

export default router;