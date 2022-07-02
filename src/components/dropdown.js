import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';
import RNPickerSelect from 'react-native-picker-select';


const Dropdown = (props) => {
    const { config, errorMessage } = props;
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, !!errorMessage ? styles.hasError : null]}>
                <RNPickerSelect
                    placeholder={config.placeholder}
                    onValueChange={props.onValueChange}
                    style={styles.inputField}
                    items={
                        props.options?.length > 0 ? props.options : []
                    }
                />
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
    placeHolderTitle: {
        opacity: 0.5
    },
    inputContainer: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: CSS_CONSTANTS.GREY_BACKGROUND,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8"
    },
    inputField: {
        inputIOS: {
            fontSize: 15,
            minWidth: "100%",
            padding: 15,
            textColor: "green"
        },
        inputAndroid: {
            fontSize: 15,
            minWidth: "100%",
            padding: 15,
            textColor: "green"
        }
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
export default Dropdown;