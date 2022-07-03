import React from 'react';
import {View, StyleSheet, ScrollView, TextInput, Image, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from "../components/notification-item-component";
import SearchComponent from "../components/SearchComponent";

const HomeScreen = ({ navigation, route }) => {
    let cardArr = [];
    for (let i = 0; i < 10; i++) {
        cardArr.push(i)
    }
    return (
        <SafeAreaView  >

             <View >
                 <View style={styles.header}>
                     <View style={styles.searchSection}>
                         <View>
                             <Image style={styles.menu} source={require('../Assets/images/menu.png')}/>
                         </View>
                         <SearchComponent/>
                     </View>

                 </View>
             </View>

            <FlatList
                style={styles.list}
                data={cardArr}
                renderItem={({ item, index }) => (
                <NotificationItem key={index}/>
                )}
            />

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        display:'flex',
        flex: 1,
        flexDirection: 'column'
    },
    searchSection: {
        flexDirection: 'row',
        height:50,
        padding:10

    },
    input: {
        flex: 1,
        padding:22,
        borderRadius:50,
        placeholder:"Search name",
        textColor:"#ccc"

    },
    scrollview: {
        flexGrow: 1,
        padding:5,
       marginTop: 10
    },
    menu: {
       width: 24,
       height: 24,

    },
    header: {
        marginTop:30

    },
    list: {
       width: "100%",
        marginBottom:80

    },

});
export default HomeScreen;

