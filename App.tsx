import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from "./src/redux/store/store";
import MainRoutes from './src/MainRoutes';

export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <MainRoutes store={store}/>
    </PersistGate>
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
