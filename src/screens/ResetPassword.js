import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Keyboard } from 'react-native';
import Input from '../components/input';
import CustomButton from '../components/button'
import { CSS_CONSTANTS } from '../utils/css-contants';
import { validate, validateConfirmPassword } from '../utils/validation-wrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONSTANTS } from '../utils/contants';
import { useIsFocused } from "@react-navigation/native"

const config = {
    fields: {
        password: {
            placeholder: "Password",
            type: "password",
            textContentType: "newPassword", //iOS
        },
        confirmPassword: {
            placeholder: "Confirm Password",
            type: "password",
            textContentType: "newPassword", //iOS
        },
        oldPassword: {
            placeholder: "Old Password",
            type: "password",
            textContentType: "newPassword", //iOS
        }
    },
    header: {
        title: "Change Password",
        closeButton: true
    },
    submitButton: {
        buttonText: 'Change Password',
        roundedButton: true
    }
}
let formSubmitted = false;

const ResetPassword = ({ navigation, route }) => {
    const isFocused = useIsFocused();
    const [password, onPasswordChange] = React.useState(password);
    const [confirmPassword, onConfirmPasswordChange] = React.useState(confirmPassword);
    const [passwordError, setPasswordError] = React.useState(passwordError);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(confirmPasswordError);
    const [oldPasswordError, setOldPasswordError] = React.useState(oldPasswordError);
    const [oldPassword, onOldPasswordChange] = React.useState(oldPassword);
    const [incorrectOldPassword = false, setIncorrectOldPassword] = React.useState(incorrectOldPassword);

    
    const checkValidation = () => {
        formSubmitted = true;
        setOldPasswordError(validate('Password', oldPassword))
        setPasswordError(validate('Password', password))
        setConfirmPasswordError(validateConfirmPassword(['confirmPassword', 'password'], [confirmPassword, password]))
        if ( !oldPasswordError && !passwordError && !confirmPasswordError) {
            if ( oldPassword === CONSTANTS.PASSWORD) 
            {
                Keyboard.dismiss();
                navigation.navigate('Login');
            } 
            else {
                setIncorrectOldPassword(true);
            }
        }
    }

  const refreshPage = () => {
        formSubmitted = false;
        setIncorrectOldPassword(false);
        onPasswordChange(null);
        setPasswordError(null);
        onOldPasswordChange(null);
        setOldPasswordError(null);
        onConfirmPasswordChange(null);
        setConfirmPasswordError(null);
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
        if (password === "") {
            onPasswordChange(null)
        }
        if (formSubmitted) {
            setPasswordError(validate('password', password))
        }
    }, [password]);

    React.useEffect(() => {
        if (oldPassword === "") {
            onOldPasswordChange(null)
        }
        if (formSubmitted) {
            setOldPasswordError(validate('password', oldPassword))
        }
        setIncorrectOldPassword(false);
    }, [oldPassword]);

    React.useEffect(() => {
        if (confirmPassword === "") {
            onConfirmPasswordChange(null)
        }
        if (formSubmitted) {
            setConfirmPasswordError(validate(['confirmPassword', 'password'], [confirmPassword, password]))
        }
    }, [confirmPassword]);


    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logostyle} source={require('../Assets/images/logo.png')} />
                    </View>
                    <View >
                        {incorrectOldPassword ? <Text style={styles.IncorrectOldPasswordError} >Incorrect old password</Text> : null}
                        <Input config={config.fields.oldPassword} onChangeText={onOldPasswordChange} errorMessage={oldPasswordError}></Input>
                        <Input config={config.fields.password} onChangeText={onPasswordChange} errorMessage={passwordError}></Input>
                        <Input config={config.fields.confirmPassword} onChangeText={onConfirmPasswordChange} errorMessage={confirmPasswordError}></Input>
                    </View>
                    <View style={styles.buttonsContainer}><CustomButton onPress={checkValidation} config={config.submitButton}></CustomButton></View>
                </View>
            </SafeAreaView>
        </ScrollView>
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
        marginTop: 70,
        width: "100%"
    },
    logoContainer: {
        marginBottom: 100,
        alignSelf: "center",
        alignItems: "center"
    },
    logostyle: {
        width: 275,
        height: 60,
        resizeMode: 'contain'
    },
    IncorrectOldPasswordError: {
        color: CSS_CONSTANTS.ERROR_COLOR,
        alignSelf: "center"
    }
})
export default ResetPassword;