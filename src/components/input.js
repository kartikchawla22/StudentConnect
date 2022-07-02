import React from 'react';
import { TextInput, StyleSheet, View, Pressable, Text } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';

const Input = (props) => {
    const { config, errorMessage } = props;
    const [type, setType] = React.useState(config.type);
    const switchPasswordMode = () => {
        if (type === "password") {
            setType("text")
        } else {
            setType("password")
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, !!errorMessage ? styles.hasError : null]}>
                <TextInput
                    style={styles.inputField}
                    name={config.name}
                    placeholder={config.placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType={config.textContentType}
                    autoComplete={config.autoComplete}
                    secureTextEntry={type === "password"}
                    enablesReturnKeyAutomatically
                    contextMenuHidden={config.type === "password"}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    keyboardType={config.keyboardType ? config.keyboardType : "default"}
                />
                {config.type === "password" ?
                    <Pressable onPress={switchPasswordMode} style={styles.inputFieldButton}><Text style={styles.showButtonText}>{type === 'password' ? 'Show' : 'Hide'}</Text></Pressable>
                    : null}
            </View>
            {!!errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        marginTop: 25,
        width: "100%",
    },
    inputContainer: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",

    },
    inputField: {
        padding: 15,
        fontSize: 15,
        width: '100%',
    },
    inputFieldButton: {
        position: 'absolute',
        right: 25,
    },
    showButtonText: {
        color: CSS_CONSTANTS.COLOR_PRIMARY
    },
    hasError: {
        borderColor: CSS_CONSTANTS.ERROR_COLOR
    },
    errorMessage: {
        color: CSS_CONSTANTS.ERROR_COLOR,
        alignSelf: "flex-start",
        marginLeft: 5
    }
});
export default Input;