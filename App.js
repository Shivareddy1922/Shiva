import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import IntroCarousel from './src/screens/IntroCarousel';
import Home from './src/screens/Home';
import LoginSignup from './src/screens/LoginSignup';
import EnterOTP from './src/screens/EnterOTP';
import SetupProfile from './src/screens/SetupProfile';
import Dashboard from './src/screens/Dashboard';
import RequestFeedback from './src/screens/RequestFeedback';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Intro" component={IntroCarousel} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={LoginSignup} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
        <Stack.Screen name="SetupProfile" component={SetupProfile} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="RequestFeedback" component={RequestFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}