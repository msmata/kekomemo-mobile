export const BORRAR_COMIDA = "BORRAR_COMIDA";
export const AGREGAR_COMIDA = "AGREGAR_COMIDA";

export const borrarComida = id => {
    return {type: BORRAR_COMIDA, idComida: id};
}

export const agregarComida = (descripcion, urlImagen) => {
    return {type: AGREGAR_COMIDA, descripcionComida: descripcion, urlComida: urlImagen}
}