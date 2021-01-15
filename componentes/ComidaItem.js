import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const ComidaItem = props => {

    let Imagen;

    if (props.imagen === '') {
        Imagen = <Image style={styles.imagen} source={require('../assets/comidas.jpeg')} />
    } else {
        Imagen = <Image style={styles.imagen} source={{uri: props.imagen}} />
    }

    if (props.onSeleccion) {
        Imagen = <TouchableWithoutFeedback onPress={() => props.onSeleccion(props.idComida)}>
            {Imagen}
        </TouchableWithoutFeedback>;
    }

    let BotonBorrado;

    if (props.permiteBorrado) {
        BotonBorrado = <Entypo name="trash" size={32} color="red" onPress={props.borrarComida} />;
    }

    return (
        <View style={styles.contenedorComida}>
            <View style={styles.cabecera}>
                <Text style={styles.nombre}>{props.nombre}</Text>
                {BotonBorrado}
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