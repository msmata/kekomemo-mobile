import React from 'react';
import { StyleSheet } from 'react-native';
import KekomemoNavigator from './navegacion/kekomemo_navigator';

export default function App() {
  return (
      <KekomemoNavigator />
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
