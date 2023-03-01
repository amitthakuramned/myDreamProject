import React from 'react'
import { Button, View,StyleSheet,Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


export default function HomeScreen(props:any){
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
          <Text>Hello React Native Navigation 👋</Text>
    
          <Button
            title='Push Settings Screen'
            color='#710ce3'
            onPress={() => Navigation.push(props.componentId, {
              component: {
                name: 'Settings'
              }
            })} />
        </View>
      );
  };