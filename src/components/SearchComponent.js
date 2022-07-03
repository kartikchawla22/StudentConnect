import React from 'react';
import {Animated, Dimensions, StyleSheet, TextInput, View} from 'react-native';
export const deviceWidth = Dimensions.get('window').width;

const SearchComponent = (props) => {
    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder='Search friends here'
                style={styles.formField}
                placeholderTextColor={'#888888'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:"90%",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom:1,
        marginLeft:10,
        borderColor: "#E8E8E8",
        alignSelf: "center",
        shadowColor: "#000000",
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 10
    },
    formField: {
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        borderColor: '#888888',
        fontSize: 18,
        height: 50
    }
})

export default SearchComponent;