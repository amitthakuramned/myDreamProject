import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
  View,
} from "native-base";
import { Navigation } from "react-native-navigation";
import { gql, useMutation, useQuery } from "@apollo/client";
import { LOGIN_USER } from "../service/loginService";

export const LoginScreen = ({ navigation }: any, props: any) => {
  const { mainRoot } = props;
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const handleInputPassword = (value: any) => {
    setLoginPayload({ ...loginPayload, password: value });
  };

  const handleInputId = (value: any) => {
    setLoginPayload({ ...loginPayload, email: value });
  };

  const handelSubmit = () => {
    loginUser({
      variables: {
        userLogin: loginPayload,
      },
      context: {
        headers: {
          "x-custom-component-add": "kkk-add",
          "x-origin-server": "pure-react"
        }
      }
    });
  };

  useEffect(() => {
    console.log("data>>>>>>>>", data?.user?.token,loading,error);
    if(data?.user?.token){
      navigation.navigate('Home')
    }
  }, [data,loading,error]);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              fontWeight="600"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <Input onChangeText={handleInputId} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input onChangeText={handleInputPassword} type="password" />
                <Link
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Link>
              </FormControl>
              <Button onPress={handelSubmit} mt="2" colorScheme="indigo">
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  I'm a new user.{" "}
                </Text>
                <Link
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Sign Up
                </Link>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
};
