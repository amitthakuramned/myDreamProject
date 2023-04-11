import React from 'react'
import { Button, View,StyleSheet,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import { clearAsynStoreAll } from '../utility/localStorage';
import { clearUserState } from '../redux/reducer/userReducer';


export const SettingsScreen=({ navigation }:any,props:any)=>{
    const {mainRoot}= props
    const dispatch = useDispatch();
    const onSignOut =()=>{
      dispatch(clearUserState())
      clearAsynStoreAll()
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go to login" />
        <Button onPress={onSignOut} title="signOut" />
      </View>
    );
  };
  