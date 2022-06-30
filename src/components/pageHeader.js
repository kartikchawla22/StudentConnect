import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { CSS_CONSTANTS } from '../utils/css-contants';

const PageHeader = (props) => {
    const { config } = props;
    renderLeftHandButton = () => {
        if (config.closeButton) {
            return <IconAntDesign style={styles.icon}
                name='close' onPress={() => !!props.redirectURL ? props.navigation.navigate(props.redirectURL) : props.navigation.goBack()} />
        } else if (config.burgerButton) {
            return <Feather style={styles.icon}
                name='menu' />;
        }
    }
    return (
        <View style={styles.container}>

            {renderLeftHandButton()}
            <Text style={styles.header}>
                {config.title}</Text>
            {!!config.rightHandButtonText ? <Text style={styles.righHandButton}>{config.rightHandButtonText}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        marginTop: 25,
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1
    },
    header: {
        fontSize: 30,
        opacity: 0.5
    },
    icon: {
        left: 10,
        position: "absolute",
        fontSize: 20
    },
    righHandButton: {
        right: 10,
        position: "absolute",
        fontSize: 15,
        color: CSS_CONSTANTS.COLOR_PRIMARY
    }
});
export default PageHeader;