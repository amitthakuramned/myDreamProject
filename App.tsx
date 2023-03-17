import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from "./src/redux/store/store";
import MainRoutes from './src/MainRoutes';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"

const client = new ApolloClient({
  uri:'http://localhost:4000',
  cache:new InMemoryCache()
});

export default function App() {
  let persistor = persistStore(store);
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <MainRoutes store={store}/>
    </PersistGate>
  </Provider>
  </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight:'150%',
  },
});
