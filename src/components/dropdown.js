import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'


const DropdownComponent = (props) => {
    const { config, errorMessage } = props;
    const actionSheet = React.useRef();
    const showActionSheet = () => {
        actionSheet.current.show()
    }
    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, !!errorMessage ? styles.hasError : null]}>
                <Text onPress={showActionSheet} style={styles.inputField}>{config.placeholder}</Text>
                <ActionSheet
                    ref={actionSheet}
                    style={styles.inputField}
                    title={config.title}
                    options={[...props.options, 'Cancel']}
                    cancelButtonIndex={props.options?.length}
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
        padding: 15,
        fontSize: 15,
        width: '100%',
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
export default DropdownComponent;