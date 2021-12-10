import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
"yarn add react-redux @reduxjs/toolkit redux-persist"
"expo install expo-font @expo-google-fonts/poppins "
"expo install expo-app-loading "
"yarn add styled-components @types/styled-components-react-native"
"yarn add axios"
*/
