import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { COMIDAS } from '../data/dummy';
import ModalAgregarComida from '../componentes/ModalAgregarComida';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import ListaComidas from '../componentes/ListaComidas';

const PantallaComidas = props => {

    const [agregarNuevaComida, setAgregarNuevaComida] = useState(false);
    const [listadoComidas, setListadoComidas] = useState(COMIDAS);

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
              { text: "OK", onPress: () => borrarComida(id) }
            ],
            { cancelable: false }
        );
    }

    const borrarComida = id => {
        const listaComidasNueva = listadoComidas.filter(comida => comida.id !== id);
        setListadoComidas(listaComidasNueva);
    }

    const addComida = (valor) => {
        const listaComidasNueva = listadoComidas;
        listaComidasNueva.push({
            id: listaComidasNueva.length + 1,
            nombre: valor.descripcion,
            imagen: valor.urlImagen
        });
        setListadoComidas(listaComidasNueva);
        setAgregarNuevaComida(false);
    }

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

export default PantallaComidas;