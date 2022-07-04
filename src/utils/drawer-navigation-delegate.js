import React from 'react';
import FriendListPage from '../screens/friendList';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/homscreen';
import CurrentUserPage from '../screens/currentuserPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Drawer = createDrawerNavigator();

const DrawerNavigationFasade = ({ navigation }) => {
    const Logout = () => {
        navigation.reset({
            index: 0,
            routes: [
                { name: 'Login' }
            ],
        })
    }
    return (
        <SafeAreaProvider>
            <Drawer.Navigator initialRouteName='Home' screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "transparent",
                },
                title: "",

            }}>
                <Drawer.Screen name="Home" component={HomeScreen} options={{
                    drawerLabel: "Home",
                    title: "Notifications"
                }} />
                <Drawer.Screen name="FriendList" component={FriendListPage} options={{
                    drawerLabel: "Friend Requests",
                    title: "Friend Requests"
                }} />
                <Drawer.Screen name="CurrentUser" component={CurrentUserPage} options={{
                    drawerLabel: "My Profile",
                    title: "My Profile"
                }} />
                <Drawer.Screen name="Logout" component={Logout} options={{
                    drawerLabel: "Logout"
                }} />

            </Drawer.Navigator>
        </SafeAreaProvider>
    )
}
export default DrawerNavigationFasade;