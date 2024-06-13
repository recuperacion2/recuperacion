import { Router } from "express";

const rutaComputador = Router();

rutaComputador.get("/pc", () => {
    console.log("get");
});
rutaComputador.get("/pc", () => {
    console.log("get");
});
rutaComputador.post("/pc", () => {
    console.log("get");
});
rutaComputador.put("/pc", () => {
    console.log("get");
});
rutaComputador.delete("/pc", () => {
    console.log("get");
});



export default rutaComputador