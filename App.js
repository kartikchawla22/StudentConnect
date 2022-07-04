/**
 * Ride Share
 * https://github.com/kartikchawla22/Ride-Share/
 *
 */

import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import LoginPage from './src/screens/Loginpage';
import SignupPage from './src/screens/SignupPage';
import ResetPassword from './src/screens/ResetPassword';
import ForgotPassword from './src/screens/ForgotPassword';
import CurrentUserPage from './src/screens/currentuserPage';
import Otheruserpage from './src/screens/OtheruserPage';
import FriendListPage from './src/screens/friendList'
import HomeScreen from "./src/screens/homscreen";
import DrawerNavigationFasade from './src/utils/drawer-navigation-delegate'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App: () => Node = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Drawer.Navigator initialRouteName="Home" useLegacyImplementation={true} screenOptions={{ showHeader: false }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen
            name="FriendList" component={FriendListPage} />
        </Drawer.Navigator> */}
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} headerMode={"none"} >
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="SignUp" component={SignupPage} />
          <Stack.Screen name="OtheruserPage" component={Otheruserpage} />
          <Stack.Screen name="DrawerNavigationFasade" component={DrawerNavigationFasade} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
};

export default App;
