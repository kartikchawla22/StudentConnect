/**
 * Ride Share
 * https://github.com/kartikchawla22/Ride-Share/
 *
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginPage from './src/screens/Loginpage';
import SignupPage from './src/screens/SignupPage';
import ResetPassword from './src/screens/ResetPassword';
import ForgotPassword from './src/screens/ForgotPassword';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignupPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;