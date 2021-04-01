import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const VistaSugerenciaComida = ({sugerirComida, comidaSugerida, chef}) => {

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

export default VistaSugerenciaComida;