import express from "express";
import PenjualanDetailController from "../controllers/PenjualanDetailController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, PenjualanDetailController.create);
router.get('/', auth,  PenjualanDetailController.index);
router.get('/:id', auth, PenjualanDetailController.find);
router.put('/:id', auth, PenjualanDetailController.update);
router.delete('/:id', auth, PenjualanDetailController.delete)



export { router as penjualanDetailRouter }
