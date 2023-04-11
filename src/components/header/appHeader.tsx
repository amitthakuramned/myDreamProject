import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  View,
  Menu,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Navigation } from "react-native-navigation";
import MenuBar from "../menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { clearUserState, userStateSelector } from "../../redux/reducer/userReducer";
import { clearAsynStoreAll } from "../../utility/localStorage";

const AppHeader = ({ navigation }: any, props: any) => {
  const dispatch = useDispatch();
  const {user} = useSelector(userStateSelector);
  const onSignOut = () => {
    dispatch(clearUserState());
    clearAsynStoreAll();
  };

  const onClickMenu = (item: any) => {
    if (item !== "Logout") {
      navigation?.navigate(item);
    } else {
      onSignOut();
    }
  };

  const optionData = ["Home", "Settings", "Logout"];
  const options = optionData?.map((item: any) => {
    return (
      <>
        <Menu.Item onPress={() => onClickMenu(item)}>{item}</Menu.Item>
      </>
    );
  });

  return (
    <View w="100%" textAlign="center" display="contents">
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <MenuBar options={options} />
          <Text color="white" fontSize="20" fontWeight="bold">
            {user?.LogedUser?.firstName}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </View>
  );
};

export default AppHeader;
