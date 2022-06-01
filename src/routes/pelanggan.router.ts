import express from "express";
import PelangganController from "../controllers/PelangganController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, PelangganController.create);
router.get('/', auth,  PelangganController.index);
router.get('/:id', auth, PelangganController.find);
router.put('/:id', auth, PelangganController.update);
router.delete('/:id', auth, PelangganController.delete)



export { router as pelangganRouter }
