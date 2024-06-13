import { Router } from "express";
import { crearPc, eliminarPc, listarPc, modificarPc, mostrarPc } from "../controllers/controller.computador";

const rutaComputador = Router();

rutaComputador.get("/pc", mostrarPc);
rutaComputador.get("/pc", listarPc);
rutaComputador.post("/pc", crearPc);
rutaComputador.put("/pc", modificarPc);
rutaComputador.delete("/pc", eliminarPc);



export default rutaComputador