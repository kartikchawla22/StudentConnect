import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button';

const config = {
    editButton: {
        buttonText: 'Edit'
    },
    logoutButton: {
        buttonText: 'Logout'
    },
    friendsButton: {
        buttonText: "Friends"
    }
}
const CurrentUserPage = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logostyle} source={require('../Assets/images/profile-pic.png')} />
                    </View>
                    <Text style={styles.usernametext}>Monica Gamage</Text>
                    <View style={[styles.buttonsContainer, styles.editButton]}><CustomButton onPress={() => { }} config={config.editButton}></CustomButton></View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.details}>Cousre : MDEV </Text>
                        <Text style={styles.details}>Semester : Summer </Text>
                        <Text style={styles.details}>Home Coutnry : India </Text>
                        <Text style={styles.details}>Interests: cooking, singing, dancing </Text>
                        <Text style={styles.details}>About Me: Some SAmple Text Goes Here Some SAmple Text Goes Here Some SAmple Text Goes Here</Text>
                    </View>
                </View>
                <View style={styles.buttonsContainer}><CustomButton buttonTextStyles={[styles.friendsButtonText]} styles={[styles.friendsButton]} onPress={() => { }} config={config.friendsButton}></CustomButton></View>
                <View style={styles.buttonsContainer}><CustomButton onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [
                            { name: 'Login' }
                        ],
                    })
                }} config={config.logoutButton}></CustomButton></View>
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
        marginTop: 55,
        marginBottom: 30
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
        marginLeft: 35,
        maxWidth: "90%",
        paddingHorizontal: 10
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
    editButton: {
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
    friendsButton: {
        backgroundColor: '#ffffff',
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    },
    friendsButtonText: {
        color: '#000000',
        fontWeight: "normal"
    }
})
export default CurrentUserPage;