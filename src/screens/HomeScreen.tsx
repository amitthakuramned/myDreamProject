import React from 'react'
import { Button, View,StyleSheet,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


export const HomeScreen=({ navigation }:any,props:any)=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Settings')} title="Go to settings" />
    </View>
  );
}