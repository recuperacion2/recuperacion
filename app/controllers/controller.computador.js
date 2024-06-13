export const mostrarPc = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const listarPc = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const crearPc = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const modificarPc = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};
export const eliminarPc = async(req, res) => {
    const id = req.params.id

    try {
        const rest = await pool.query(`call SP_MOSTRAR(${id});`);
        res.json({"respuesta": rest})
    } catch (error) {
        res.json({"error": error})
    }
};