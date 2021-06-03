import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import img1 from './image/1.jpg'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => console.log('text clicked')} numberOfLines={1}>Hello sword</Text>

      <Text onPress={() => console.log('text clicked')} numberOfLines={1}>Hello!</Text>
      <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>

      <Image blurRadius={5}   style={styles.logo} source={img1}   />



      </TouchableWithoutFeedback>

<Button title='click me' color='#000'></Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  },
  logo: {
    width: 100,
    height: 100
  }
});
