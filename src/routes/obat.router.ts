import express from "express";
import ObatController from "../controllers/ObatController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, ObatController.create);
router.get('/', auth,  ObatController.index);
router.get('/:id', auth, ObatController.find);
// router.put('/:id', auth, ObatController.update);
// router.delete('/:id', auth, ObatController.delete)



export { router as obatRouter }
