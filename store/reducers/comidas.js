import { BORRAR_COMIDA, AGREGAR_COMIDA } from "../actions/comidas";
import Comida from "../../modelo/Comida";

const { COMIDAS } = require("../../data/dummy");

const estadoInicial = {
    comidas: COMIDAS
};

export default (estado = estadoInicial, action) => {

    const listadoComidas = estado.comidas;

    switch (action.type) {
        case BORRAR_COMIDA:

            return {
                comidas: listadoComidas.filter(comida => comida.id !== action.idComida)
            };
        case AGREGAR_COMIDA:
            const nuevaComida = new Comida(listadoComidas.length + 1, action.descripcionComida, action.urlComida);
            listadoComidas.push(nuevaComida);

            return {
                comidas: listadoComidas
            }
        default:
            return estado;
    }
}