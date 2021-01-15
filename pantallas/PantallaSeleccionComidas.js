import React, { useState } from 'react';
import {View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import { COMIDAS } from '../data/dummy';
import ListaComidas from '../componentes/ListaComidas';

const PantallaSeleccionComidas = props => {

    const [listadoComidas, setListadoComidas] = useState(COMIDAS);

    return (
        <View style={styles.listaComidas}>
            <ListaComidas
                listadoComidas={listadoComidas}
                permiteBorrado={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    listaComidas: {
        flex: 1,
        width: '90%',
        marginLeft: 10
    }
});

PantallaSeleccionComidas.navigationOptions = navData => {
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

export default PantallaSeleccionComidas;