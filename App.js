import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Comidas from './pantallas/Comidas';

export default function App() {
  return (
    <View style={styles.container}>
      <Comidas />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
