import express from "express";
import UserController from "../controllers/UserController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, UserController.create);
router.get('/', auth, UserController.index);
router.get('/:id', UserController.find);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete)

export { router as userRouter }
