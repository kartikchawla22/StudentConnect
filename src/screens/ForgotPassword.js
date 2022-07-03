import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Keyboard } from 'react-native';
import Input from '../components/input';
import CustomButton from '../components/button'
import { CSS_CONSTANTS } from '../utils/css-contants';
import { validate, validateConfirmPassword } from '../utils/validation-wrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONSTANTS } from '../utils/contants';
import { useIsFocused } from "@react-navigation/native"
import PageHeader from '../components/pageHeader';

const config = {
    fields: {
        email: {
            placeholder: "Email",
            type: "text",
            textContentType: "emailAddress", //iOS
            autoComplete: "email" //Android
        }
    },
    header: {
        title: "Forgot Password",
        closeButton: true
    },
    submitButton: {
        buttonText: 'Submit',
        roundedButton: true
    }
}
let formSubmitted = false;

const ForgotPassword = ({ navigation, route }) => {
    const isFocused = useIsFocused();
    const [email, onEmailChange] = React.useState(email);
    const [emailError, setEmailError] = React.useState(emailError);
    const [resetCodeSent = false, setResetCodeSent] = React.useState(resetCodeSent);
    
    const sendEmail = () => {
        formSubmitted = true;
        setEmailError(validate('email', email))
        if (!email) {
            return;
        }
        if (emailError) {
            setResetCodeSent(false);
        }

    }

  const refreshPage = () => {
        formSubmitted = false;
        setResetCodeSent(false);
        onEmailChange(null);
        setEmailError(null);
    }
    React.useEffect(() => {
        if (isFocused) {
            refreshPage();
        }
    }, [isFocused]);


    React.useEffect(() => {
        formSubmitted = false;
    }, [route]);

    React.useEffect(() => {
        if (email === "") {
            onEmailChange(null)
        }
        if (formSubmitted) {
            setEmailError(validate('email', email))
           
        }
        
            setResetCodeSent(false);
    }, [email]);


    return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <PageHeader config={config.header}></PageHeader>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textContainerLarge} >Forgot your password? </Text>
                        <Text style={styles.textContainerSmall} >Don’t worry, just enter your email and we’ll send you a rest code. </Text>
                        {resetCodeSent ? <Text style={styles.setResetCodeSent} >Email sent sucessfully!!</Text> : null}
                    </View>
                        <Input config={config.fields.email} onChangeText={onEmailChange} errorMessage={emailError}></Input>
                    
                    <View style={styles.buttonsContainer}><CustomButton onPress={sendEmail} config={config.submitButton}></CustomButton></View>
                    <View style={styles.signinlinkContainer}><Text onPress={() => {
                    Keyboard.dismiss();
                    navigation.navigate('Login')
                    }} style={styles.signinlink}>Login</Text></View>
                </View>
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
    },
    buttonsContainer: {
        alignItems: "center",
        marginTop: 70,
        width: "100%"
    },
    successMessage: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        alignSelf: "center"
    },
    textContainerLarge: {
        fontcolor: CSS_CONSTANTS.COLOR_BLACK,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    textContainerSmall: {
        fontcolor: CSS_CONSTANTS.COLOR_BLACK,
        fontSize: 15,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    textContainer: {
        width:'85%',
        marginBottom: 30
    },
    signinlinkContainer: {
        marginTop: 25,
        marginBottom: 25
    },
    signinlink: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        textDecorationLine: "underline"
    },
    header: {
        marginBottom: 70,
        width: "100%"
    },
    setResetCodeSent: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        alignSelf: "center",
        marginTop: 50,
    }
})

export default ForgotPassword;