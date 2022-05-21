import express from "express";
import AuthController from "../controllers/AuthController";
import validate  from "../middlewares/auth.validator";
import loginValidate from "../middlewares/login.validator";
import { auth } from "../middlewares/auth.middleware";

const router = express.Router()

router.post('/register',validate, AuthController.register);
router.post('/login',loginValidate, AuthController.login);
router.get('/profile',auth, AuthController.profile)

export { router as authRouter }
