import React from 'react'
import { Button, View,StyleSheet,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


export default function SettingsScreen(props:any){
    const {mainRoot}= props
    const styles = StyleSheet.create({
        root: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'whitesmoke'
        }
      });
      return (
        <View style={styles.root}>
          <Text>Settings Screen</Text>
        </View>
      );
  };