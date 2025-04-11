import { Router } from "express";   


const router = Router();

import { getEstudiantes, getEstudiante, createEstudiante, updateEstudiante, deleteEstudiante } from "../controllers/Estudiante.controller";

router.get('/', getEstudiantes);
router.get('/:id', getEstudiante);
router.post('/', createEstudiante);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

export default router;