import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './src/screens/SplashScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Splash">
        <StackScreen name="Splash" component={SplashScreen} />
        <StackScreen name="LogIn" component={LogInScreen} />
        <StackScreen name="SignUp" component={SignUpScreen} />
        <StackScreen name="Home" component={HomeScreen} />
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;