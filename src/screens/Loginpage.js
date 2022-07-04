import React from 'react';
import { View, StyleSheet, Text, Image, Keyboard, ScrollView } from 'react-native';
import Input from '../components/input';
import CustomButton from '../components/button'
import { CSS_CONSTANTS } from '../utils/css-contants';
import { validate } from '../utils/validation-wrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONSTANTS } from '../utils/contants';
import { useIsFocused } from "@react-navigation/native"

const config = {
    fields: {
        email: {
            placeholder: "Email",
            type: "text",
            textContentType: "emailAddress", //iOS
            autoComplete: "email", //Android,
            name: "email"
        },
        password: {
            placeholder: "Password",
            type: "password",
            textContentType: "newPassword", //iOS
            name: "email"
        }
    },
    submitButton: {
        buttonText: 'Log in',
        roundedButton: true
    }
}
let formSubmitted = false;
const LoginPage = ({ navigation, route }) => {
    const isFocused = useIsFocused();
    const [email, onEmailChange] = React.useState(email);
    const [password, onPasswordChange] = React.useState(password);

    const [emailError, setEmailError] = React.useState(emailError);
    const [passwordError, setPasswordError] = React.useState(passwordError);

    const [wrongEmailOrPassword = false, setWrongEmailOrPassword] = React.useState(wrongEmailOrPassword);

    const checkValidation = () => {
        setEmailError(validate('email', email))
        setPasswordError(validate('password', password))
        formSubmitted = true;
        if (!email || !password) {
            return;
        }
        if (!emailError && !passwordError) {
            if (email === CONSTANTS.EMAIL && password === CONSTANTS.PASSWORD) {
                Keyboard.dismiss();
                navigation.reset({
                    index: 0,
                    routes: [
                        { name: 'DrawerNavigationFasade' }
                    ],
                })
            } else {
                setWrongEmailOrPassword(true);
            }
        }
    }
    const refreshPage = () => {
        formSubmitted = false;
        setWrongEmailOrPassword(false);
        onEmailChange(null);
        onPasswordChange(null);
        setPasswordError(null);
        setEmailError(null);
    }
    React.useEffect(() => {
        if (isFocused) {
            refreshPage();
        }
    }, [isFocused]);

    React.useEffect(() => {
        if (email === "") {
            onEmailChange(null)
        }
        if (formSubmitted) {
            setEmailError(validate('email', email))
        }
        setWrongEmailOrPassword(false);
    }, [email]);

    React.useEffect(() => {
        if (password === "") {
            onPasswordChange(null)
        }
        if (formSubmitted) {
            setPasswordError(validate('password', password))
        }
        setWrongEmailOrPassword(false);
    }, [password]);
    return (
        <SafeAreaView>
            <View style={styles.logoContainer}>
                <Image style={styles.logostyle} source={require('../Assets/images/logo.png')} />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View >
                        {wrongEmailOrPassword ? <Text style={styles.wrongEmailOrPasswordError} >Wrong Email/Password</Text> : null}
                        <Input value={email} config={config.fields.email} onChangeText={onEmailChange} errorMessage={emailError}></Input>
                        <Input value={password} config={config.fields.password} onChangeText={onPasswordChange} errorMessage={passwordError}></Input>
                    </View>
                    <View style={styles.buttonsContainer}><CustomButton onPress={checkValidation} config={config.submitButton}></CustomButton></View>
                    <View style={styles.forgotPasswordTextContainer}><Text style={styles.forgotPasswordText} onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('ForgotPassword')
                    }}>Forgot Your Password?</Text></View>
                    <View style={styles.forgotPasswordTextContainer}><Text onPress={() => {
                        Keyboard.dismiss();
                        navigation.navigate('SignUp')
                    }} style={styles.forgotPasswordText}>Sign up</Text></View>
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
    buttonsContainer: {
        alignItems: "center",
        marginTop: 60,
        width: "100%"
    },
    forgotPasswordTextContainer: {
        marginTop: 25
    },
    forgotPasswordText: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        textDecorationLine: "underline"
    },
    logoContainer: {
        marginTop: 70,
        marginBottom: 20,
        alignSelf: "center",
        alignItems: "center"
    },
    logostyle: {
        width: 275,
        height: 60,
        resizeMode: 'contain'
    },
    wrongEmailOrPasswordError: {
        color: CSS_CONSTANTS.ERROR_COLOR,
        alignSelf: "center"
    }

})
export default LoginPage;

