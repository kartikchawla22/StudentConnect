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
import FriendRequestCard from './src/components/friend-request-card'
import FriendListPage from './src/screens/friendList'
import HomeScreen from "./src/screens/homscreen";
const Stack = createNativeStackNavigator();
const App: () => Node = () => {



  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignupPage} />
          <Stack.Screen name="FriendList" component={FriendListPage} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;