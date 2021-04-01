import React, { useState } from 'react';
import { Image, StyleSheet, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import ListaComidas from '../componentes/ListaComidas';
import { useSelector } from 'react-redux';
import VistaSugerenciaComida from '../vistas/VistaSugerenciaComida';

const PantallaSugerenciaComida = () => {

    const [listadoComidas, setListadoComidas] = useState(useSelector(estado => estado.comidas.comidas));
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
        <VistaSugerenciaComida
            sugerirComida={sugerirComida}
            comidaSugerida={comidaSugerida}
            chef={chef}
        />
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
    }
});

export default PantallaSugerenciaComida;