import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from "../components/notification-item-component";
import SearchComponent from "../components/SearchComponent";
import { CONSTANTS } from '../utils/contants';
import PageHeader from '../components/pageHeader';
const config = {
    header: {
        title: "Notifications"
    }
}

const HomeScreen = ({ navigation, route }) => {

    return (
        <SafeAreaView  >
            <View >
                <View style={styles.header}>
                    <View style={styles.searchSection}>
                        <View>
                            <Image style={styles.menu} source={require('../Assets/images/menu.png')} />
                        </View>
                        <SearchComponent />
                    </View>
                    <PageHeader navigation={navigation} config={config.header}></PageHeader>
                </View>
            </View>

            <FlatList
                style={styles.list}
                data={CONSTANTS.NOTIFICATIONS}
                renderItem={({ item, index }) => (
                    <NotificationItem item={item} key={index} navigation={navigation} />
                )}
            />

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
    searchSection: {
        flexDirection: 'row',
        height: 50,
        padding: 10

    },
    header: {
        width: "100%"
    },
    input: {
        flex: 1,
        padding: 22,
        borderRadius: 50,
        placeholder: "Search name",
        textColor: "#ccc"

    },
    scrollview: {
        flexGrow: 1,
        padding: 5,
        marginTop: 10
    },
    menu: {
        width: 24,
        height: 24,

    },
    list: {
        width: "100%",
        marginBottom: 80

    },

});
export default HomeScreen;

