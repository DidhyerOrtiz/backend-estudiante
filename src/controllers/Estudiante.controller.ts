import { Request, Response } from "express";


import { 
    srvCreateEstudiante,
    srvGetEstudianteByID,
    srvGetEstudiantes,
    srvDeleteEstudiante
} from "../services/estudiante.service";


// OBTENER TODAS LAS CARRERAS
export const getEstudiantes = async (req: Request, res: Response) => {

    try {
        const estudiantes = await srvGetEstudiantes();
        res.status(200).json(estudiantes)
    } catch (error) {
        console.log('Error al obtener los estudiantes' + error)
    }

}

// OBTENER UNA CARRERA POR ID
export const getEstudiante = async(req: Request, res: Response) => {

    try {
        const {  idEstudiante } = req.params;
    
        const estudiante = await srvGetEstudianteByID(+idEstudiante);
    
        if(!estudiante) res.status(404).json({ message: 'No se encontró el estudiante con ID ' + idEstudiante });
    
        res.status(200).json(estudiante);
    
    } catch (error) {

        console.log('Error al obtener el estudiante' + error)
    
    }

}

// CREAR UNA CARRERA
export const createEstudiante = async (req: Request, res: Response) => {

    try {

        const { nombreEstudiante, direccion, correoElectronico, telefono, idCarrera } = req.body;

        const estudiante = await srvCreateEstudiante(nombreEstudiante, direccion,correoElectronico, telefono, idCarrera);

        res.status(201).json(estudiante)

    } catch (error) {
        console.log('Error al crear estudiante' + error)
    }

}

// ACTUALIZAR UNA CARRERA
export const updateEstudiante = async (req: Request, res: Response) => {

    const { id } = req.params; // const datos = req.params; // const id = datos.id;
    const { nombreEstudiante, direccion, correoElectronico, telefono, idCarrera } = req.body;
    try {
        const estudiante = await srvGetEstudianteByID(+id);

        if(!estudiante) res.status(404).json({ message: 'No se encontró al estudiante con ID ' + id });

        const estudianteUpdated = await srvCreateEstudiante(nombreEstudiante, direccion, correoElectronico, telefono, idCarrera);

        res.status(200).json(estudianteUpdated)

    }
    catch (error) {
        console.log('Error al actualizar al estudiante' + error)
    }

}

// ELIMINAR UNA CARRERA
export const deleteEstudiante = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const estudiante = await srvGetEstudianteByID(+id);

        if(!estudiante) res.status(404).json({ message: 'No se encontró la carrera con ID ' + id });

        // eliminar la carrera
        await srvDeleteEstudiante(+id);

        res.status(200).json({ message: 'Estudiante eliminado' })

    }
    catch (error) {
        console.log('Error al eliminar estudiante' + error)
    }

}