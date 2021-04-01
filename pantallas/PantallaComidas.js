import React, { useState } from 'react';
import { Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import { borrarComida, agregarComida } from '../store/actions/comidas' 
import VistaComidas from '../vistas/VistaComidas';

const PantallaComidas = () => {

    const dispatch = useDispatch();

    const [agregarNuevaComida, setAgregarNuevaComida] = useState(false);
    const listadoComidas = useSelector(estado => estado.comidas.comidas);

    const mostrarAlertaBorrado = id => {
        const comidaSeleccionada = listadoComidas.find(comida => comida.id === id);

        Alert.alert(
            "Cuidado!",
            "¿Confirmás que querés borrar " + comidaSeleccionada.nombre + "?",
            [
              {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel"
              },
              { text: "OK", onPress: () => dispatch(borrarComida(id)) }
            ],
            { cancelable: false }
        );
    }

    const addComida = (valor) => {
        dispatch(agregarComida(valor.descripcion, valor.urlImagen));
        setAgregarNuevaComida(false);
    }

    return (
        <VistaComidas
            listadoComidas={listadoComidas}
            mostrarAlertaBorrado={mostrarAlertaBorrado}
            agregarNuevaComida={agregarNuevaComida}
            setAgregarNuevaComida={setAgregarNuevaComida}
            addComida={addComida}
        />
    );
};

PantallaComidas.navigationOptions = navData => {
    return {
        headerTitle: 'Todas las comidas',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
            title='Menu'
            iconName='md-menu'
            onPress={() => {
                navData.navigation.toggleDrawer()
            }}
        />
    </HeaderButtons>
    }
}

export default PantallaComidas;