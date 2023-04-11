import { useLazyQuery, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Navigation } from "react-native-navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearAsynStoreAll } from "../utility/localStorage";
import { clearUserState, userStateSelector } from "../redux/reducer/userReducer";
import { GET_ALLUSERS } from "../service/loginService";
import {
  ScrollView,
  VStack,
  Center,
  useTheme,
  Heading,
  NativeBaseProvider,
  View,
} from "native-base";
import { homeStyles } from "./styling/homeStyle";
import { Card } from "../components/appComp/cards";

export const HomeScreen = ({ navigation }: any, props: any) => {
  const {user} = useSelector(userStateSelector);
  const dispatch = useDispatch();
  const [getAllUsers,{ data, loading, error }] = useLazyQuery<any>(GET_ALLUSERS, {
    variables: {
      userEmail: "",
    },
  });

  const onSignOut = () => {
    dispatch(clearUserState());
    clearAsynStoreAll();
  };

  useEffect(() => {
    if(user){
      getAllUsers()
    }
  }, [user])

  return (
    <View w="100%" textAlign="center" display="contents">
      <Center mt="3" mb="4">
        <Heading fontSize="xl">Home</Heading>
      </Center>
      <VStack flex="1" paddingX="15px">
        {
          data?.users?.map((item:any)=>{
            return  <Card boxStyle={homeStyles.container} tilte={item?.firstName +" "+ item?.lastName} content={item?.city +" "+ item?.country } footer={item?.email} />
          })
        }
      </VStack>
    </View>
  );
};
