import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { COMIDAS } from '../data/dummy';
import ComidaItem from '../componentes/ComidaItem';
import ListaComidas from '../componentes/ListaComidas';

const PantallaSugerenciaComida = props => {

    const [listadoComidas, setListadoComidas] = useState(COMIDAS);
    const [comidasSugeridas, setComidasSugeridas] = useState([]);
    const [chef, setChef] = useState(<Image style={styles.chef} source={require('../assets/chef-danette.jpeg')} />);
    const [comidaSugeridaActual, setComidaSugeridaActual] = useState(null);

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const sugerirComida = () => {
        if (listadoComidas.length === 0) {
            setChef(<Image style={styles.chefEnojado} source={require('../assets/chef_enojado.jpeg')} />);
            mostrarAlertaSinSugerencia();
            setComidaSugeridaActual(null);
        } else {
            let index = randomNumber(0, listadoComidas.length - 1);
            let idComida = listadoComidas[index].id;

            while (comidasSugeridas.indexOf(idComida) !== -1) {
                index = randomNumber(0, listadoComidas.length - 1);
                idComida = listadoComidas[index].id;
            }

            setComidaSugeridaActual(listadoComidas[index]);
            comidasSugeridas.push(idComida);
            setComidasSugeridas(comidasSugeridas);
            const nuevaListaComidas = listadoComidas.filter(comida => comida.id !== idComida);
            setListadoComidas(nuevaListaComidas);
        }
    }

    const seleccionarComida = id => {
        console.log("Seleccionada comida con id ", id);
    }

    const mostrarAlertaSinSugerencia = () => {
        Alert.alert(
            "Aviso",
            "Me quedé sin sugerencias... y si cargás más comidas?",
            [
              { text: "OK", onPress: () => {} }
            ],
            { cancelable: false }
        );
    }

    let comidaSugerida;
    if (comidaSugeridaActual != null) {

        const listadoComidas = [comidaSugeridaActual];

        comidaSugerida = <ListaComidas
            listadoComidas={listadoComidas}
            permiteBorrado={false}
            onSeleccion={() => seleccionarComida(comidaSugeridaActual.id)}
        />
    }

    return (
        <View style={styles.sugerenciaContainer}>
            <Text>Presioná la cara del chef para recibir una sugerencia</Text>
            <TouchableWithoutFeedback onPress={sugerirComida}>
                {chef}
            </TouchableWithoutFeedback>
            {comidaSugerida}
        </View>
    );
};

PantallaSugerenciaComida.navigationOptions = navData => {
    return {
        headerTitle: 'Te sugerimos comer...',
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
    chef: {
        height: 250,
        width: '100%'
    },
    chefEnojado: {
        height: 600,
        width: '100%'
    },
    sugerenciaContainer: {
        width: '100%',
        paddingHorizontal: 10
    }
});

export default PantallaSugerenciaComida;