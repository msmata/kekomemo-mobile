import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ComidaItem = props => {

    let Imagen;

    if (props.imagen === 'sin-imagen') {
        Imagen = <Image style={styles.imagen} source={require('../assets/comidas.jpeg')} />
    } else {
        Imagen = <Image style={styles.imagen} source={{uri: props.imagen}} />
    }

    return (
        <View style={styles.contenedorComida}>
            <Text>{props.nombre}</Text>
            {Imagen}
        </View>
    );
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        width: '100%',
        height: 350
    },
    contenedorComida: {
        flex: 1,
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc',
        marginVertical: 10
    }
});

export default ComidaItem;