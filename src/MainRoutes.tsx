import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes, PublicRoutes, PrivateRoutes } from "./routers/AllRoutes";
import { useSelector } from "react-redux";
import { userStateSelector } from "./redux/reducer/userReducer";
import HigherLayOut from "./mainLayout/higherLayOut";

export default function MainRoutes(props: any) {
  const Stack = createNativeStackNavigator();
  const { isUserAuth } = useSelector(userStateSelector);
  const [userAuth, setUserAuth] = useState<boolean>(false);

  useEffect(() => {
    console.log('isUserAuth>>>>>',isUserAuth)
    setUserAuth(isUserAuth)
  }, [isUserAuth])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userAuth
          ? PublicRoutes?.map((scrn: any) => {
              return (
                <Stack.Screen name={scrn?.name} component={scrn?.component} options={{headerShown: false}} />
              );
            })
          : null}
        {/* privat routes */}
        {userAuth ? (
          <>
            {PrivateRoutes?.map((scrn: any) => {
              return (
                  <Stack.Screen name={scrn?.name} component={scrn?.component} options={{headerShown: false}} />
              );
            })}
          </>
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

