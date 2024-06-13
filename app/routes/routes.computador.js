import { Router } from "express";
import { crearPc, eliminarPc, listarPc, modificarPc, mostrarPc } from "../controllers/controller.computador";

const rutaComputador = Router();

rutaComputador.get("/pc", mostrarPc);
rutaComputador.get("/pc/:id", listarPc);
rutaComputador.post("/pc", crearPc);
rutaComputador.put("/pc/:id", modificarPc);
rutaComputador.delete("/pc/:id", eliminarPc);



export default rutaComputador;