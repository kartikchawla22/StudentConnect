import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from "../components/notification-item-component";
import { CONSTANTS } from '../utils/contants';
const config = {
    header: {
        title: "Notifications",
        burgerButton: true
    }
}

const HomeScreen = ({ navigation, route }) => {
    let cardArr = [];
    for (let i = 0; i < 10; i++) {
        cardArr.push(i)
    }
    return (
        <SafeAreaView>
            <FlatList
                style={[styles.list]}
                data={CONSTANTS.NOTIFICATIONS}
                renderItem={({ item, index }) => (
                    <NotificationItem item={item} key={index} navigation={navigation} />
                )}
            />
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        height: 50,
        padding: 10

    },
    header: {
        width: "100%",
        padding: 10
    },
    list: {
        width: "100%",
        marginBottom: 10
    }
});
export default HomeScreen;

