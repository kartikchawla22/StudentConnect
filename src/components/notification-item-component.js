import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


const NotificationItem = (props, key) => {
    return (
        <View style={styles.container }>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={require('../Assets/images/profile-pic.png')}></Image>
            </View>
            <View style={styles.container_fields}>
                <Text style={styles.heading}>User Name</Text>
                <Text style={styles.text}>Sent you a friend request</Text>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '95%',
        display: "flex",
        flexDirection: 'row',
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#E8E8E8",
        alignSelf: "center",
        paddingVertical: 10,
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 10
    },
    profilePictureContainer: {
        marginLeft: 15,
    },
    profilePicture: {
        width: 75,
        height: 75,
        resizeMode: 'contain'
    },
    container_fields: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: 10,
        margin:10
    },
    text: {
        fontWeight: "regular",
        alignSelf: "flex-start",
    },
    heading: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        color:"black"
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "flex-end",
        maxWidth: "100%",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "space-between"
    }
});
export default NotificationItem;