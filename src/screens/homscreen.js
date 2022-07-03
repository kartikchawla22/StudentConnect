import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, TextInput, Image, FlatList, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationItem from "../components/notification-item-component";
import SearchComponent from "../components/SearchComponent";
import SideMenu from 'react-native-side-menu'
const HomeScreen = ({ navigation, route }) => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleIsOpen = () => {
        setIsOpen(current => !current);
    };

    let cardArr = [];
    for (let i = 0; i < 10; i++) {
        cardArr.push(i)
    }
    const menu = <SideMenu navigator={navigation}/>;
    return (
        <SafeAreaView   >

             <View >
                 <View style={styles.header}>
                     <View style={styles.searchSection}>
                         <View>
                             <TouchableOpacity onPress={setIsOpen}  style={styles.body}>
                                 <Image style={styles.menu} source={require('../Assets/images/menu.png')}/>
                             </TouchableOpacity>
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
            <SideMenu menu={menu} disableGestures={false
            } autoClosing={true} menuPosition={'right'} isOpen={isOpen} >
                <View style={{width:"50%", backgroundColor:"white", height:"100%", alignItems: 'center',paddingTop:15}}>
                            <Image  source={require('../Assets/images/profile-pic.png')}></Image>

                    <Text style={styles.item1}>John Doe</Text>


                    <TouchableOpacity onPress={setIsOpen}>
                        <Text style={styles.item}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setIsOpen}>
                        <Text style={styles.item}>Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setIsOpen}>
                        <Text style={styles.item}>Sign Out</Text>
                    </TouchableOpacity>

                  <TouchableOpacity onPress={setIsOpen}>
                      <Text style={styles.item}>Close Menu</Text>
                  </TouchableOpacity>
                </View>
            </SideMenu>
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
    item: {
        width:'100%',
        textColor:"#ccc",
        fontSize: 25,
        padding:20,
        fontWeight:"bold",
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }, item1: {
        textColor:"#ccc",
        fontSize: 25,
        padding:20,
        fontWeight:"bold",
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

    }, menustyle: {
       width: 200,
       height:"100%",
        backgroundColor: 'red'

    }, divider: {

    },

});
export default HomeScreen;

