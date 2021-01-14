import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ComidaItem = props => {

    let Imagen;

    if (props.imagen === '') {
        Imagen = <Image style={styles.imagen} source={require('../assets/comidas.jpeg')} />
    } else {
        Imagen = <Image style={styles.imagen} source={{uri: props.imagen}} />
    }

    return (
        <View style={styles.contenedorComida}>
            <View style={styles.cabecera}>
                <Text style={styles.nombre}>{props.nombre}</Text>
                <Entypo name="trash" size={32} color="red" onPress={props.borrarComida} />
            </View>
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
    nombre:{
        marginLeft: 10
    },
    contenedorComida: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#ccc',
        marginVertical: 10
    },
    cabecera: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        alignItems: 'center'
    }
});

export default ComidaItem;