import React from 'react';
import { FlatList } from 'react-native';
import ComidaItem from './ComidaItem';

const ListaComidas = props => {

    const renderComida = itemData => {
        return (
            <ComidaItem 
                nombre={itemData.item.nombre} 
                imagen={itemData.item.imagen}
                permiteBorrado={props.permiteBorrado}
                borrarComida={() => props.mostrarAlertaBorrado(itemData.item.id)} 
            />
        );
    }

    return (
        <FlatList 
            data={props.listadoComidas}
            renderItem={renderComida}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default ListaComidas;