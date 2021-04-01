import React from 'react';
import { Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import { useSelector } from 'react-redux';
import VistaSeleccionComidas from '../vistas/VistaSeleccionComidas';

const PantallaSeleccionComidas = props => {

    const listadoComidas = useSelector(estado => estado.comidas.comidas);

    const consumirComida = id => {
        console.log('Consumida comida con id ', id);
    }

    const seleccionarComida = id => {
        const comidaSeleccionada = listadoComidas.find(comida => comida.id === id);

        Alert.alert(
            "Confirmación",
            "¿Confirmás que vas a comer " + comidaSeleccionada.nombre + "?",
            [
              {
                text: "Cancelar",
                onPress: () => {},
                style: "cancel"
              },
              { text: "OK", onPress: () => consumirComida(id) }
            ],
            { cancelable: false }
        );
    }

    return (
        <VistaSeleccionComidas
            listadoComidas={listadoComidas}
            seleccionarComida={seleccionarComida}
        />
    );
};

PantallaSeleccionComidas.navigationOptions = navData => {
    return {
        headerTitle: 'Selección manual de comida',
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

export default PantallaSeleccionComidas;