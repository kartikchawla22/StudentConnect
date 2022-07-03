import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button';
import { CSS_CONSTANTS } from '../utils/css-contants';
const config = {
    addFriendButton: {
        buttonText: 'Add As Friend',
        roundedButton: true
    }
}
const Otheruserpage = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logostyle} source={require('../Assets/images/user.png')} />
                    </View>
                    <Text style={styles.usernametext}>Monica Gamage</Text>
                    <View style={[styles.buttonsContainer, styles.addFriendButton]}><CustomButton onPress={() => { }} config={config.addFriendButton}></CustomButton></View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>Cousre : MDEV </Text>
                        <Text style={styles.details}>Semester : Summer </Text>
                        <Text style={styles.details}>Home Coutnry : India </Text>
                    </View>

                    <View style={styles.textAreaContainer}>
                        <Text style={styles.aboutHeading}>About</Text>
                        <Text>Hello am monica . I am second Semester. I love to dance and cooking . I have basic coding knowlegde.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 55
    },
    usernametext: {
        marginBottom: 10,
        fontcolor: '#000000',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    detailsContainer: {
        alignSelf: "flex-start",
        marginLeft: 35
    },
    details: {
        fontSize: 16,
        marginTop: 20
    },
    buttonsContainer: {
        alignItems: "center",
        marginVertical: 20,
        width: "100%",
    },
    addFriendButton: {
        maxWidth: "50%"
    },
    logoContainer: {
        marginBottom: 35,
        alignSelf: "center",
        alignItems: "center"
    },
    logostyle: {
        width: 680,
        height: 150,
        resizeMode: 'contain'
    },
    textAreaContainer: {
        width: '85%',
        display: "flex",
        flexDirection: "column",
        marginVertical: 40,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#E8E8E8",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center"
    },
    aboutHeading: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        fontSize: 20,
        marginBottom: 10
    }
})
export default Otheruserpage;