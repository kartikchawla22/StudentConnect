import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';

const CustomButton = (props) => {
    const { config } = props;
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, ...(props?.styles?.length > 0 ? props?.styles : [])]}
        ><Text style={[styles.buttonText, ...(props?.buttonTextStyles?.length > 0 ? props?.buttonTextStyles : [])]}>{config.buttonText}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: CSS_CONSTANTS.COLOR_PRIMARY,
        borderWidth: 1,
        borderColor: '#fff',
        width: "80%",
        borderRadius: 100,
        alignItems: 'center',
        padding: 10,
        alignContent: "center",
    },
    buttonText: {
        color: CSS_CONSTANTS.COLOR_PRIMARY_TEXT,
        fontWeight: "500",
        fontSize: 15
    }
});
export default CustomButton;