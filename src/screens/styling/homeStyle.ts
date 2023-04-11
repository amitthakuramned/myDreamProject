import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
      backgroundColor: '#0891b2',
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 5,
      alignSelf: 'center',
      width: 375,
      maxWidth: '100%',
      marginBottom: "10px"
    },
    timings: {
      color: '#fff',
      fontSize: 14
    },
    metaContainer: {
      justifyContent: 'space-between'
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    avatar: {
      height: 100,
      width: 100,
      borderRadius: 100
    },
    description: {
      color: 'white',
      marginTop: 5,
      fontSize: 20
    },
    button: {
      backgroundColor: '#22d3ee',
      alignSelf: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 2
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 14
    }
  });