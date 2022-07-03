import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button';
import { CSS_CONSTANTS } from '../utils/css-contants';
import PageHeader from '../components/pageHeader';
import { CONSTANTS } from '../utils/contants';
const config = {
    addFriendButton: {
        buttonText: 'Confirm',
        roundedButton: true
    },
    cancelFriendButton: {
        buttonText: 'Cancel',
        roundedButton: true
    },
    header: {
        title: "",
        closeButton: true
    }
}
const Otheruserpage = ({ navigation, route }) => {
    const { userId } = route.params
    const userProfile = CONSTANTS.USERS.find((user) => user.id == userId);
    console.log(userProfile.id, CONSTANTS.FRIENDS, CONSTANTS.FRIENDS.indexOf(userProfile.id) > -1);
    const isUserFriend = CONSTANTS.FRIENDS.indexOf(userProfile.id) > -1;
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <PageHeader navigation={navigation} config={config.header}></PageHeader>
                </View>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logostyle} source={require('../Assets/images/user.png')} />
                    </View>
                    <Text style={styles.usernametext}>{userProfile.userName}</Text>
                    <View style={styles.buttonsContainer}>
                        <CustomButton styles={[styles.addFriendButton]} onPress={() => { }} config={config.addFriendButton}></CustomButton>
                        <CustomButton styles={[styles.cancelFriendButton]} buttonTextStyles={[styles.cancelFriendButtonText]} onPress={() => { }} config={config.cancelFriendButton}></CustomButton>
                    </View>
                    {/* {!isUserFriend ? <View style={[styles.buttonsContainer, styles.addFriendButton]}><CustomButton onPress={() => { }} config={config.addFriendButton}></CustomButton></View> : null} */}
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>Cousre : MDEV </Text>
                        <Text style={styles.details}>Semester : Summer </Text>
                        <Text style={styles.details}>Home Coutnry : India </Text>
                    </View>

                    <View style={styles.textAreaContainer}>
                        <Text style={styles.aboutHeading}>About</Text>
                        <Text>Hello am {userProfile.userName} . I am second Semester. I love to dance and cooking . I have basic coding knowlegde.
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
    header: {
        width: "100%"
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
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    addFriendButton: {
        maxWidth: "45%",
        marginHorizontal: 10
    },
    cancelFriendButton: {
        maxWidth: "45%",
        marginHorizontal: 10,
        backgroundColor: "#ffffff",
        borderColor: "#000000",
        borderWidth: 0.2
    },
    cancelFriendButtonText: {
        color: "#000000"
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