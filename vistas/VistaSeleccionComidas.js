import React from 'react';
import {View, StyleSheet } from 'react-native';
import ListaComidas from '../componentes/ListaComidas';

const VistaSeleccionComidas = ({listadoComidas, seleccionarComida}) => {

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

export default VistaSeleccionComidas;