import { AppDataSurce } from "../config/db"; 
import { Estudiante } from "../entities/Estudiante.entity"; 

// Crear el repositorio
const estudianteRepository = AppDataSurce.getRepository(Estudiante);

// C = Create, R = Read, = U = Update, D = Delete

// Leer todas las carreras
export const srvGetEstudiantes = async () => {
    // select * from carreras order by id_carrera desc;
    const estudiantes = await estudianteRepository.find({
        order: {nombreEstudiante: 'ASC'}
    });

    return estudiantes;
}

// Obtener una carrera
export const srvGetEstudianteByID = async (pIdEstudiante: number) => {
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    });

    return estudiante;
}

// Crear una nueva carrera
export const srvCreateEstudiante = async (pNombreEstudiante: string, pDireccionEstudiante: string, pCorreoElectronicoEstudiante: string, pTelefonoEstudiante: string, pIdCarreraEstudiante: number) => {
    const nuevoEstudiante = new Estudiante();

    nuevoEstudiante.nombreEstudiante = pNombreEstudiante;
    nuevoEstudiante.direccion = pDireccionEstudiante;
    nuevoEstudiante.correoElectronico = pCorreoElectronicoEstudiante;
    nuevoEstudiante.telefono = pTelefonoEstudiante;
    nuevoEstudiante.idCarrera = pIdCarreraEstudiante;

    return await estudianteRepository.save(nuevoEstudiante);

}

// Actualizar carrera
export const srvUpdateEstudiante = async (
    pIdEstudiante: number,  
    pNombreEstudiante: string, 
    pDireccionEstudiante: string,
    pCorreoElectronicoEstudiante: string, 
    pTelefonoEstudiante: string, 
    pIdCarreraEstudiante: number) => {
    // Buscar carrera
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    });

    //validacion
    if(!estudiante) return null;

    estudiante.nombreEstudiante = pNombreEstudiante;
    estudiante.direccion = pDireccionEstudiante;
    estudiante.correoElectronico = pCorreoElectronicoEstudiante;
    estudiante.telefono = pTelefonoEstudiante;
    estudiante.idCarrera = pIdCarreraEstudiante;

    return await estudianteRepository.save(estudiante);
}

// Eliminar Carrera
export const srvDeleteEstudiante = async (pIdEstudiante: number) => {
    // Buscar carrera
    const estudiante = await estudianteRepository.findOne({
        where: { idEstudiante: pIdEstudiante}
    });



    //validacion
    if(!estudiante) return null;

    return await estudianteRepository.remove(estudiante);
}