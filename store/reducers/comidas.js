import { BORRAR_COMIDA, AGREGAR_COMIDA, LISTAR_COMIDAS } from "../actions/comidas";
import Comida from "../../modelo/Comida";

const estadoInicial = {
    comidas: []
};

export default (estado = estadoInicial, action) => {

    const listadoComidas = estado.comidas;

    switch (action.type) {
        case LISTAR_COMIDAS:
            return {
                comidas: action.comidas
            }
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