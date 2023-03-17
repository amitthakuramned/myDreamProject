import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes, PublicRoutes, PrivateRoutes } from "./routers/AllRoutes";

export default function MainRoutes(props: any) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {PublicRoutes?.map((scrn: any) => {
          return <Stack.Screen name={scrn?.name} component={scrn?.component} />;
        })}
        
        {PrivateRoutes?.map((scrn: any) => {
          return <Stack.Screen name={scrn?.name} component={scrn?.component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
