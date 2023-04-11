import {
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  NativeBaseProvider,
  ScrollView,
  VStack,
} from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { userStateSelector } from "../redux/reducer/userReducer";
import SideBar from "../components/sideBar/sideBar";
import AppHeader from "../components/header/appHeader";
import AppFooter from "../components/footer/appFooter";

const HigherLayOut = (props: any) => {
  const { children } = props;
  const { isUserAuth } = useSelector(userStateSelector);
  if (isUserAuth) {
    return (
      <NativeBaseProvider>
        <Center>
          <AppHeader />
        </Center>
        <ScrollView w="100%">
          {children}
        </ScrollView>
        <Center>
          <AppFooter />
        </Center>
      </NativeBaseProvider>
    );
  } else {
    return <>{children}</>;
  }
};

export default HigherLayOut;
