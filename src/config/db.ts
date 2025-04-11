import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config();

export const AppDataSurce = new DataSource ({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number (process.env.DB_HOST),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        "src/entity//*.ts"
    ]
});

export const connectDB = async () =>{

    try {
        await AppDataSurce.initialize ();
        console.log("Conectado a la Base de Datos")
    } catch (error) {
        console.log("Error al Conectarse a la Base de Datos", error);
    }
}