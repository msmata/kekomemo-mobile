import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { COMIDAS } from '../data/dummy';
import ComidaItem from '../componentes/ComidaItem';
import ModalAgregarComida from '../componentes/ModalAgregarComida';

const Comidas = props => {

    const [agregarNuevaComida, setAgregarNuevaComida] = useState(false);
    const [listadoComidas, setListadoComidas] = useState(COMIDAS);

    const renderComida = itemData => {
        return (
            <ComidaItem nombre={itemData.item.nombre} imagen={itemData.item.imagen} />
        );
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
            <Text style={styles.titulo}>Lista de comidas</Text>
            <FlatList 
                data={COMIDAS}
                renderItem={renderComida}
                keyExtractor={(item, index) => index.toString()}
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
    titulo: {
        paddingTop: 30,
        paddingBottom: 30
    },
    listaComidas: {
        flex: 1,
        width: '90%'
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

export default Comidas;