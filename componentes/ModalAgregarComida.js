import React, { useState } from 'react';
import { View, TextInput, Text, Modal, Button, StyleSheet} from 'react-native'

const ModalAgregarComida = props => {

    const [comidaNueva, setComidaNueva] = useState('');

    return (
        <Modal visible={props.visible}>
            <View>
                <Text>Agregá una nueva comida</Text>
                <TextInput value={comidaNueva} onChangeText={texto => setComidaNueva(texto)} />
                <Button title="Cancelar" onPress={props.onCancelar} />
                <Button title="Agregar" onPress={() => {
                    
                    props.onAceptar(comidaNueva);
                }} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({

});

export default ModalAgregarComida;