import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';
import CustomButton from './button';

const config = {
    cancelButton: {
        buttonText: "Cancel"
    },
    confirmButton: {
        buttonText: "Confirm"
    }
}

const FriendRequestCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={require('../Assets/images/profile-pic.png')}></Image>
            </View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.userName}>User Name</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignSelf: "flex-start" }}>

                    <CustomButton styles={[styles.button, styles.confirmButton]} config={config.confirmButton}></CustomButton>
                    <CustomButton styles={[styles.button, styles.cancelButton]} config={config.cancelButton}></CustomButton>
                </View>
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
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#E8E8E8",
        alignSelf: "center",
        paddingVertical: 10,
        shadowRadius: 1,
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
    userName: {
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    buttonsContainer: {
        flex: 1,
        alignItems: "flex-end",
        maxWidth: "100%",
        flexDirection: "column",
        overflow: "hidden",
        justifyContent: "space-between"
    },
    button: {
        borderWidth: 1,
        borderColor: '#fff',
        maxWidth: "40%",
        borderRadius: 100,
        alignItems: 'center',
        padding: 10,
        alignContent: "center",
        marginHorizontal: 10,
    },
    cancelButton: {
        backgroundColor: CSS_CONSTANTS.COLOR_GREY,

    },
    confirmButton: {
        backgroundColor: CSS_CONSTANTS.COLOR_PRIMARY,
    }
});
export default FriendRequestCard;