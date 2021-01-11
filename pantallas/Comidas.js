import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { COMIDAS } from '../data/dummy';
import ComidaItem from '../componentes/ComidaItem';

const Comidas = props => {

    const renderComida = itemData => {
        return (
            <ComidaItem nombre={itemData.item.nombre} imagen={itemData.item.imagen} />
        );
    }

    return (
        <View style={styles.listaComidas}>
            <Text style={styles.titulo}>Lista de comidas: {COMIDAS.length}</Text>
            <FlatList 
                data={COMIDAS}
                renderItem={renderComida}
                keyExtractor={(item, index) => index.toString()}
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
    }
});

export default Comidas;