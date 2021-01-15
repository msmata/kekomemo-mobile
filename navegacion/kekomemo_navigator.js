import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import PantallaComidas from '../pantallas/PantallaComidas';
import PantallaSeleccionComidas from '../pantallas/PantallaSeleccionComidas';

const defNavOpt = {
    headerStyle: {
        backgroundColor: 'white'
    },
    headerTintColor: 'black'
};

const ListadoComidasNavigator = createStackNavigator({
    ListadoComidas: PantallaComidas
}, {
    defaultNavigationOptions: defNavOpt,
    navigationOptions: {
        drawerIcon: drawerConfig => <FontAwesome name="list-alt" size={24} color="black" />
    },
    initialRouteName: 'ListadoComidas'
});

const SeleccionComidasNavigator = createStackNavigator({
    SeleccionComidas: PantallaSeleccionComidas
}, {
   defaultNavigationOptions: defNavOpt,
   navigationOptions: {
        drawerIcon: drawerConfig => <AntDesign name="rightsquareo" size={24} color="black" />
   } 
});

const KekomemoNavigator = createDrawerNavigator({
    Listado: ListadoComidasNavigator,
    Seleccion: SeleccionComidasNavigator
}, {
    contentOptions: {
        activeTintColor: 'black'
    },
    initialRouteName: 'Listado'

});

export default createAppContainer(KekomemoNavigator);