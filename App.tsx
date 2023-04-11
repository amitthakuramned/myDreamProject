import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppState, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./src/redux/store/store";
import MainRoutes from "./src/MainRoutes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { getDataFromLocal } from "./src/utility/localStorage";
import HigherLayOut from "./src/mainLayout/higherLayOut";

export default function App() {
  let persistor = persistStore(store);
  const [token, setToken] = useState<any>([]);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  useEffect(() => {
    getDataFromLocal("token").then((result: any) => {
      return setToken(result);
    });
  }, [getDataFromLocal("token")]);

  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
    headers: {
      authorization: token ? token : "",
    },
  });

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <HigherLayOut>
            <MainRoutes store={store} />
          </HigherLayOut>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "150%",
  },
});
