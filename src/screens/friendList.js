import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FriendRequestCard from '../components/friend-request-card'
import PageHeader from '../components/pageHeader'

const config = {
    header: {
        title: "Friend Requests",
        closeButton: true
    }
}
const FriendListPage = ({ navigation, route }) => {
    let cardArr = [];
    for (let i = 0; i < 10; i++) {
        cardArr.push(<FriendRequestCard key={i}></FriendRequestCard>)
    }
    return (
        <SafeAreaView>
            {/* <View style={styles.header}>
                <PageHeader navigation={navigation} config={config.header}></PageHeader>
            </View> */}
            <ScrollView>
                <View style={styles.container}>
                    {cardArr}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%'
    }

})
export default FriendListPage;

