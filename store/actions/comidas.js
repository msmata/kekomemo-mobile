import Comida from "../../modelo/Comida";

export const BORRAR_COMIDA = "BORRAR_COMIDA";
export const AGREGAR_COMIDA = "AGREGAR_COMIDA";
export const LISTAR_COMIDAS = "LISTAR_COMIDAS";

export const listarComidas = () => {
    return async dispatch => {
        const response = await fetch('https://kekomemo-f4a2a-default-rtdb.firebaseio.com/comidas.json');

        if (!response.ok) {
            const errorMessage = await response.json();
            throw new Error(errorMessage);
        }

        const resData = await response.json();
        const comidas = extraerListaComidas(resData);
        console.log("comidas: ", comidas);

        dispatch({type: LISTAR_COMIDAS, comidas: comidas});
    }
}

const extraerListaComidas = response => {
    const listaComidas = [];

    for (key in response) {
        const elemento = response[key];
        listaComidas.push(new Comida(key, elemento.descripcion, elemento.imagen));
    }

    return listaComidas;
}

export const borrarComida = id => {
    return {type: BORRAR_COMIDA, idComida: id};
}

export const agregarComida = (descripcion, urlImagen) => {
    return async dispatch => {
        fetch('https://kekomemo-f4a2a-default-rtdb.firebaseio.com/comidas.json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            descripcion: descripcion,
                            imagen: urlImagen
                        })
                    }).then(async response => {
                        console.log("comida subida");
                    }).catch(error => console.log(error));
        dispatch({type: AGREGAR_COMIDA, descripcionComida: descripcion, urlComida: urlImagen})
    }
}