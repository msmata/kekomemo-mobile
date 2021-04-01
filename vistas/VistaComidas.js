import React from 'react';
import {View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import ModalAgregarComida from '../componentes/ModalAgregarComida';
import ListaComidas from '../componentes/ListaComidas';

const VistaComidas = ({listadoComidas, mostrarAlertaBorrado, agregarNuevaComida, setAgregarNuevaComida, addComida}) => {

    return (
        <View style={styles.listaComidas}>
            <ListaComidas
                listadoComidas={listadoComidas}
                mostrarAlertaBorrado={mostrarAlertaBorrado}
                permiteBorrado={true}
            />
            <View style={styles.btnAgregar}>
                <AntDesign name="pluscircleo" size={32} color="black" onPress={() => {
                    setAgregarNuevaComida(true);
                }} />
            </View>
            <ModalAgregarComida 
                visible={agregarNuevaComida}
                onCancelar={() => setAgregarNuevaComida(false)}
                onAceptar={addComida}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listaComidas: {
        flex: 1,
        width: '90%',
        marginLeft: 10
    },
    btnAgregar: {
        alignItems: 'center',
        padding: 20
    },
    nuevaComida: {
        flexDirection: 'row',
        flex: 1
    }
});

export default VistaComidas;