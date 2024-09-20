import express from 'express'
import { registerController } from '../controller/userController.js';

const router = express.Router();

router.post("/user/register",registerController)

export default router;