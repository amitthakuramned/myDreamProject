import React from 'react'
import { Button, View,StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';


export default function LoginScreen(props:any){
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
        <Button
          title='Login'
          color='#710ce3'
          onPress={() => Navigation.setRoot(mainRoot)}
        />
      </View>
    );
  };