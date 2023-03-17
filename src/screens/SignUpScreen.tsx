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
import { gql, useMutation, useQuery } from "@apollo/client";
import { SIGNIN_USER } from "../service/loginService";

export const SignUpScreen = ({ navigation }: any, props: any) => {
  const { mainRoot } = props;
  const [createUser, { data, loading, error }] = useMutation(SIGNIN_USER);
  const [signInPayload, setSignInPayload] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    password: "",
    contact: "",
    role: "",
    streetAddress1: "",
    streetAddress2: "",
    pinCode: "",
    profession: "",
    service: "",
    organisation: "",
    bussiness: "",
    message: "",
  });


  const handleInputFName =(value:any)=>{
    setSignInPayload({...signInPayload,firstName:value})
  }
  const handleInputlName =(value:any)=>{
    setSignInPayload({...signInPayload,lastName:value})
  }
  const handleInpuTaddress =(value:any)=>{
    setSignInPayload({...signInPayload,address:value})
  }
  const handleInpuTemail =(value:any)=>{
    setSignInPayload({...signInPayload,email:value})
  }
  const handleInpuTpassword =(value:any)=>{
    setSignInPayload({...signInPayload,password:value})
  }
  const handleInpuTcontact =(value:any)=>{
    setSignInPayload({...signInPayload,contact:value})
  }
  const handleInput =(value:any)=>{
    setSignInPayload({...signInPayload,firstName:value})
  }
  const handleInpuTcity =(value:any)=>{
    setSignInPayload({...signInPayload,city:value})
  }
  const handleInpuTstate =(value:any)=>{
    setSignInPayload({...signInPayload,state:value})
  }
  const handleInpuTcountry =(value:any)=>{
    setSignInPayload({...signInPayload,country:value})
  }
  const handleInpuTrole =(value:any)=>{
    setSignInPayload({...signInPayload,role:value})
  }
  const handleInpuTstreetAddress2 =(value:any)=>{
    setSignInPayload({...signInPayload,streetAddress2:value})
  }
  const handleInpuTstreetAddress1 =(value:any)=>{
    setSignInPayload({...signInPayload,streetAddress1:value})
  }
  const handleInpuTpinCode =(value:any)=>{
    setSignInPayload({...signInPayload,pinCode:value})
  }
  const handleInpuTprofession =(value:any)=>{
    setSignInPayload({...signInPayload,profession:value})
  }
  const handleInpuTservice =(value:any)=>{
    setSignInPayload({...signInPayload,service:value})
  }
  const handleInpuTorganisation =(value:any)=>{
    setSignInPayload({...signInPayload,organisation:value})
  }
  const handleInpuTbussiness =(value:any)=>{
    setSignInPayload({...signInPayload,bussiness:value})
  }
  const handleInpuTmessage =(value:any)=>{
    setSignInPayload({...signInPayload,message:value})
  }

  const handelSubmit =()=>{
    console.log('handelSubmit>>>>>>>>',signInPayload)
    createUser({
      variables: {
        userNew: signInPayload,
      },
    });
  }

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading
              size="lg"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              fontWeight="semibold"
            >
              Welcome
            </Heading>
            <Heading
              mt="1"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="medium"
              size="xs"
            >
              Sign up to continue!
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>First Name</FormControl.Label>
                <Input onChangeText={handleInputFName} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input onChangeText={handleInputlName}/>
              </FormControl>
              <FormControl>
                <FormControl.Label>Email</FormControl.Label>
                <Input onChangeText={handleInpuTemail} />
              </FormControl>

              <FormControl>
                <FormControl>
                  <FormControl.Label>country</FormControl.Label>
                  <Input onChangeText={handleInpuTcountry} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>state</FormControl.Label>
                  <Input onChangeText={handleInpuTstate} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>City</FormControl.Label>
                  <Input onChangeText={handleInpuTcity} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>PinCode</FormControl.Label>
                  <Input onChangeText={handleInpuTpinCode} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Contact</FormControl.Label>
                  <Input onChangeText={handleInpuTcontact} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Address</FormControl.Label>
                  <Input onChangeText={handleInpuTaddress} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>StreetAddress 1</FormControl.Label>
                  <Input onChangeText={handleInpuTstreetAddress1} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>StreetAddress 2</FormControl.Label>
                  <Input onChangeText={handleInpuTstreetAddress2} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Role</FormControl.Label>
                  <Input onChangeText={handleInpuTrole} />
                </FormControl>

                <FormControl>
                  <FormControl.Label>Profession</FormControl.Label>
                  <Input onChangeText={handleInpuTprofession} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Service</FormControl.Label>
                  <Input onChangeText={handleInpuTservice} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Organisation</FormControl.Label>
                  <Input onChangeText={handleInpuTorganisation} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Bussiness</FormControl.Label>
                  <Input onChangeText={handleInpuTbussiness} />
                </FormControl>

                <FormControl.Label>Password</FormControl.Label>
                <Input onChangeText={handleInpuTpassword}  type="password" />
              </FormControl>
              {/* <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input onChangeText={h}  type="password" />
              </FormControl> */}

              <FormControl>
                <FormControl.Label>Message</FormControl.Label>
                <Input onChangeText={handleInpuTmessage} />
              </FormControl>
              <Button onPress={handelSubmit} mt="2" colorScheme="indigo">
                Sign up
              </Button>
            </VStack>
          </Box>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
};
