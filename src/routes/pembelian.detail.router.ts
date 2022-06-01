import express from "express";
import PembelianDetailController from "../controllers/PembelianDetailController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, PembelianDetailController.create);
router.get('/', auth,  PembelianDetailController.index);
router.get('/:id', auth, PembelianDetailController.find);
router.put('/:id', auth, PembelianDetailController.update);
router.delete('/:id', auth, PembelianDetailController.delete)



export { router as pembelianDetailRouter }
