import express from "express";
import SupplierController from "../controllers/SupplierController";
import { auth } from "../middlewares/auth.middleware"
const router = express.Router()

router.post('/', auth, SupplierController.create);
router.get('/', auth,  SupplierController.index);
router.get('/:id', auth, SupplierController.find);
router.put('/:id', auth, SupplierController.update);
router.delete('/:id', auth, SupplierController.delete)



export { router as suplierRouter }