import { AppDataSurce } from "../config/db";
import { Carrera } from "../entities/Carrera.entities";

//Crear el repositorio
const carreraRepository = AppDataSurce.getRepository(Carrera);

// C = Create, R = Read, U = UpDate, D = Delete

//Leer Todas las Carreras

export const srvGetCarreras = async () => {

    const carreras = await carreraRepository.find({
        order: {nombreCarrera: "ASC" }
    });

    return carreras;
}


//Crear una Nueva Carrera
export const srvCreateCarrera = async (PnombreCarrera: string) => {

    const nuevaCarrera = new Carrera ();

    nuevaCarrera.nombreCarrera = PnombreCarrera;

    return await carreraRepository.save(nuevaCarrera);

}

//Obtener una Carrera
export const srvGetCarreraByID = async (pIdCarrera: number) => {

    const carrera = await carreraRepository.findOne({
        where: {idCarrera: pIdCarrera }
    })

    return carrera;

}

//Actualizar Carrera
export const srvUpdateCarrera = async (pIdCarrera: number, pNombreCarrera: string) => {

    //Buscar la Carrera
    const carrera = await carreraRepository.findOne({
        where: {idCarrera: pIdCarrera }
    });

    //Validación
    if(!carrera) return null;

    carrera.nombreCarrera = pNombreCarrera;

    return await carreraRepository.save(carrera);

}

//Eliminar Carrera
export const srvDeleteCarrera = async (pIdCarrera: number) => {

 //Buscar la Carrera
 const carrera = await carreraRepository.findOne({
    where: {idCarrera: pIdCarrera }
});

//Validación
if(!carrera) return null;

return await carreraRepository.remove(carrera);

}