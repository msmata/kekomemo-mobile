import React from 'react';
import {View, StyleSheet, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import ListaComidas from '../componentes/ListaComidas';
import { useSelector } from 'react-redux';

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
        <View style={styles.listaComidas}>
            <ListaComidas
                listadoComidas={listadoComidas}
                permiteBorrado={false}
                onSeleccion={seleccionarComida}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listaComidas: {
        flex: 1,
        width: '90%',
        marginLeft: 10
    }
});

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