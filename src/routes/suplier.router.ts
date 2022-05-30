import express from "express";
import SupplierController from "../controllers/SupplierController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', SupplierController.create);
// router.put('/:id', auth, ObatController.update);
// router.delete('/:id', auth, ObatController.delete)



export { router as suplierRouter }