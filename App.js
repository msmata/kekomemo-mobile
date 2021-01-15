import React from 'react';
import { StyleSheet } from 'react-native';
import KekomemoNavigator from './navegacion/kekomemo_navigator';
import { combineReducers, createStore } from 'redux';
import comidasReducer from './store/reducers/comidas';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  comidas: comidasReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <KekomemoNavigator />
    </Provider> 
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
