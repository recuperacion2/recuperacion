import { Router } from "express";
import rutaComputador from "./routes.computador";
const ruta = Router();

ruta.use("/api", rutaComputador);

export default ruta;