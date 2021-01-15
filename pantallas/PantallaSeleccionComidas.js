import React from 'react';
import {View, Text} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../componentes/CustomHeaderButton';

const PantallaSeleccionComidas = props => {
    return (
        <View>
            <Text>Pantalla de seleccion de comidas</Text>
        </View>
    );
};

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
