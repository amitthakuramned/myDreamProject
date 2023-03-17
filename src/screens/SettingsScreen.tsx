import React from 'react'
import { Button, View,StyleSheet,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


export const SettingsScreen=({ navigation }:any,props:any)=>{
    const {mainRoot}= props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button onPress={() => navigation.navigate('Login')} title="Go to login" />
      </View>
    );
  };
  