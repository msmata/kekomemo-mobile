import React, { useState } from 'react';
import { View, TextInput, Text, Modal, Button, StyleSheet} from 'react-native'

const ModalAgregarComida = props => {

    const [comidaNueva, setComidaNueva] = useState({
        descripcion: '',
        urlImagen: ''
    });

    return (
        <Modal visible={props.visible}>
            <View style={styles.contenedorComidaNueva}>
                <Text style={styles.texto}>Agregá una nueva comida</Text>
                <TextInput style={styles.txtComidaNueva} value={comidaNueva.descripcion} onChangeText={texto => setComidaNueva(
                    {...comidaNueva, descripcion: texto}
                )} />
                <Text style={styles.texto}>Podés agregar la url de una imagen que represente a esta comida</Text>
                <TextInput style={styles.txtComidaNueva} value={comidaNueva.urlImagen} onChangeText={texto => setComidaNueva(
                    {...comidaNueva, urlImagen: texto}
                )} />
                <View style={styles.botonera}>
                    <Button title="Cancelar" onPress={() => {
                        setComidaNueva({
                            descripcion: '',
                            urlImagen: ''
                        });
                        props.onCancelar();
                    }
                    } />
                    <Button title="Agregar" onPress={() => {
                        props.onAceptar(comidaNueva);
                        setComidaNueva({
                            descripcion: '',
                            urlImagen: ''
                        });
                    }} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    contenedorComidaNueva: {
        flex: 1,
        marginTop: 20
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    txtComidaNueva: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    botonera: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    }
});

export default ModalAgregarComida;