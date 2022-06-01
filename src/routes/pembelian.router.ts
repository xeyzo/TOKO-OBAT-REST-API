import express from "express";
import PembelianController from "../controllers/PembelianController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, PembelianController.create);
router.get('/', auth,  PembelianController.index);
router.get('/:id', auth, PembelianController.find);
router.put('/:id', auth, PembelianController.update);
router.delete('/:id', auth, PembelianController.delete)



export { router as pembelianRouter }
