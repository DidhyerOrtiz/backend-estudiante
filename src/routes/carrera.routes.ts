import { Router } from "express";   


const router = Router();

import { getCarreras, getCarrera, createCarrera, updateCarrera, deleteCarrera } from "../controllers/carrera.controller"; 

router.get('/', getCarreras);
router.get('/:id', getCarrera);
router.post('/', createCarrera);
router.put('/:id', updateCarrera);
router.delete('/:id', deleteCarrera);

export default router;