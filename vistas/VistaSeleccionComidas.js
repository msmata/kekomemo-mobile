import React from 'react';
import {View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';
import ListaComidas from '../componentes/ListaComidas';

const VistaSeleccionComidas = ({listadoComidas, seleccionarComida}) => {

    return (
        <View style={styles.listaComidas}>
            <ListaComidas
                listadoComidas={listadoComidas}
                permiteBorrado={false}
                onSeleccion={seleccionarComida}
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
        headerTitle: 'Selección manual de comida',
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

export default VistaSeleccionComidas;