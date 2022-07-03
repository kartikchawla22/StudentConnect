import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Input from '../components/input';
import PageHeader from '../components/pageHeader';
import CustomButton from '../components/button'
import { CSS_CONSTANTS } from '../utils/css-contants';
import { validate, validateConfirmPassword } from '../utils/validation-wrapper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dropdown from '../components/dropdown';
import { CONSTANTS } from '../utils/contants';


const config = {
    fields: {
        name: {
            placeholder: "Name",
            type: "text",
            autoComplete: "name", //Android
            textContentType: "name" //iOS
        },
        email: {
            placeholder: "Email",
            type: "text",
            textContentType: "emailAddress", //iOS
            autoComplete: "email" //Android
        },
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
        course: {
            placeholder: {
                label: 'Select Your Course',
                value: null
            }
        },
        semester: {
            placeholder: {
                label: 'Select Your Semester',
                value: null
            }
        },
        homeCountry: {
            placeholder: {
                label: 'Select Your Home Country',
                value: null
            }
        }
    },
    header: {
        title: "Signup",
        closeButton: true
    },
    submitButton: {
        buttonText: 'Submit'
    }
}
let formSubmitted = false;

const SignupPage = ({ navigation, route }) => {
    const [email, onEmailChange] = React.useState(email);
    const [password, onPasswordChange] = React.useState(password);
    const [name, onNameChange] = React.useState(name);
    const [confirmPassword, onConfirmPasswordChange] = React.useState(confirmPassword);
    const [course, onCourseChange] = React.useState(course);
    const [semester, onSemesterChange] = React.useState(semester);
    const [homeCountry, onHomeCountryChange] = React.useState(homeCountry);

    const [emailError, setEmailError] = React.useState(emailError);
    const [passwordError, setPasswordError] = React.useState(passwordError);
    const [nameError, setNameError] = React.useState(nameError);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(confirmPasswordError);
    const [courseError, setCourseErrorError] = React.useState(courseError);
    const [homeCountryError, setHomeCountryErrorError] = React.useState(homeCountryError);
    const [semesterError, setSemesterError] = React.useState(semesterError);

    const checkValidation = () => {
        formSubmitted = true;
        setEmailError(validate('email', email))
        setPasswordError(validate('password', password))
        setNameError(validate('name', name))
        setCourseErrorError(validate('semester', semester))
        setHomeCountryErrorError(validate('homeCountry', homeCountry))
        setSemesterError(validate('course', course))
        setConfirmPasswordError(validateConfirmPassword(['confirmPassword', 'password'], [confirmPassword, password]))
        if (!emailError && !passwordError && !nameError && !confirmPasswordError && !courseError && !semesterError && !homeCountryError) {
            // alert("signup success")
        }
    }
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
    }, [email]);
    React.useEffect(() => {
        if (name === "") {
            onNameChange(null)
        }
        if (formSubmitted) {
            setNameError(validate('name', name))
        }
    }, [name]);
    React.useEffect(() => {
        if (semester === null) {
            onSemesterChange(null)
        }
        if (formSubmitted) {
            setSemesterError(validate('semester', semester))
        }
    }, [semester]);


    React.useEffect(() => {
        if (course === null) {
            onCourseChange(null)
        }
        if (formSubmitted) {
            setCourseErrorError(validate('course', course))
        }
    }, [course]);
    React.useEffect(() => {
        if (homeCountry === null) {
            onHomeCountryChange(null)
        }
        if (formSubmitted) {
            setHomeCountryErrorError(validate('homeCountry', homeCountry))
        }
    }, [homeCountry]);
    React.useEffect(() => {
        if (password === "") {
            onPasswordChange(null)
        }
        if (formSubmitted) {
            setPasswordError(validate('password', password))
        }
    }, [password]);
    React.useEffect(() => {
        if (confirmPassword === "") {
            onConfirmPasswordChange(null)
        }
        if (formSubmitted) {
            setConfirmPasswordError(validate(['confirmPassword', 'password'], [confirmPassword, password]))
        }
    }, [confirmPassword]);


    return (
        <SafeAreaView>
            <View style={styles.header}>
                <PageHeader navigation={navigation} config={config.header}></PageHeader>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Input config={config.fields.email} onChangeText={onEmailChange} errorMessage={emailError}></Input>
                        <Input config={config.fields.name} onChangeText={onNameChange} errorMessage={nameError}></Input>
                        <Dropdown onValueChange={onCourseChange} errorMessage={courseError} options={CONSTANTS.COURSES} config={config.fields.course}></Dropdown>
                        <Dropdown onValueChange={onSemesterChange} errorMessage={semesterError} options={CONSTANTS.SEMESTERS} config={config.fields.semester}></Dropdown>
                        <Dropdown onValueChange={onHomeCountryChange} errorMessage={homeCountryError} options={CONSTANTS.COUNTRIES} config={config.fields.homeCountry}></Dropdown>
                        <Input config={config.fields.password} onChangeText={onPasswordChange} errorMessage={passwordError}></Input>
                        <Input config={config.fields.confirmPassword} onChangeText={onConfirmPasswordChange} errorMessage={confirmPasswordError}></Input>
                    </View>
                    <View style={styles.buttonsContainer}><CustomButton onPress={checkValidation} config={config.submitButton}></CustomButton></View>
                    <View style={styles.forgotPasswordTextContainer}><Text style={styles.forgotPasswordText} onPress={() => { navigation.navigate('Login') }} >Already have an account? Sign In</Text></View>
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
    },
    header: {
        width: "100%"
    },
    buttonsContainer: {
        alignItems: "center",
        marginTop: 70,
        width: "100%"
    },
    forgotPasswordTextContainer: {
        marginTop: 25,
        marginBottom: 25,
    },
    forgotPasswordText: {
        color: CSS_CONSTANTS.COLOR_PRIMARY,
        textDecorationLine: "underline"
    }
})
export default SignupPage;