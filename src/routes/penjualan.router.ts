import express from "express";
import PenjualanContoller from "../controllers/PenjualanContoller";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, PenjualanContoller.create);
router.get('/', auth,  PenjualanContoller.index);
router.get('/:id', auth, PenjualanContoller.find);
router.put('/:id', auth, PenjualanContoller.update);
router.delete('/:id', auth, PenjualanContoller.delete)



export { router as penjualanRouter }
