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
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { GET_USER, LOGIN_USER } from "../service/loginService";
import { storeDataLocaly, getDataFromLocal } from "../utility/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { userDetails } from "../redux/action/authAction";
import { userStateSelector } from "../redux/reducer/userReducer";

export const LoginScreen = ({ navigation }: any, props: any) => {
  const { mainRoot } = props;
  const dispatch = useDispatch();
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const [tokenn, setTokenn] = useState<any>([]);

  const [loginUser] = useMutation(LOGIN_USER);
  // const { data, loading, error } = useQuery<any>(GET_USER, {
  //   variables: {
  //     userEmail: "",
  //   },
  // });
  const [getUserDetails,{ loading, data }] = useLazyQuery(GET_USER,{
    variables: {
      userEmail: "",
    },
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
    }).then(({ data, loading, error }: any) => {
      setTokenn(data?.user?.token);
      storeDataLocaly?.("token", data?.user?.token ? data?.user?.token : "");
      setTimeout(()=>{
        getUserDetails()
      },500)
    });
  };

  useEffect(() => {
    dispatch<any>(userDetails(data))
  }, [data]);

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
