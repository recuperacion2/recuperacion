import { pool } from "../config/mysql.db";

export const mostrarPc = async(req, res) => {

    try {
        const rest = await pool.query(`call SP_MOSTRAR();`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const listarPc = async(req, res) => {
    let id = req.params['id']

    try {
        const rest = await pool.query(`call SP_LISTAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const crearPc = async(req, res) => {
    const marca = req.body.marca
    const almacenamiento = req.body.almacenamiento
    const ram = req.body.ram

    try {
        const respuesta = await pool.query(`call SP_CREAR('${marca}', '${almacenamiento}', '${ram}');`);
        res.json({"respuesta": respuesta})

    } catch (error) {
        res.json({"error": error})
    }
};
export const modificarPc = async(req, res) => {
    const id = req.body.id
    const marca = req.body.marca
    const almacenamiento = req.body.almacenamiento
    const ram = req.body.ram

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id}, '${marca}', '${almacenamiento}', '${ram}');`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const eliminarPc = async(req, res) => {
    const id = req.body.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};