import React from 'react';
import { View, StyleSheet, Text, Image,Button,TouchableOpacity,ScrollView } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button';
const checkValidation = () => {}
const onPress = () => {};
 
const config = {
    submitButton: {
        buttonText: 'Edit',
        roundedButton: true
    },
    logoutButton: {
        buttonText:'Logout',
        roundedButton:true
    }
}




const CurrentUserPage =()=>{
    return (
        <ScrollView>
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={styles.container}>
                
               
                    <View style={styles.logoContainer}>
                        <Image style={styles.logostyle} source={require('../Assets/images/user.png')} />
                    </View>
                <Text style={styles.usernametext}>Monica Gamage</Text>
                <View style={styles.buttonsContainer}><CustomButton onPress={() => {}} config={config.submitButton}></CustomButton></View>
                    
                   <View><Text style={styles.details}>Cousre : MDEV </Text><Text style={styles.details}>Semester : Summer </Text>
                <Text style={styles.details}>HomeCoutnry : India </Text></View>

                <TouchableOpacity onPress={onPress} style={styles.button}>
  <Text style={styles.messagebutton}>Message</Text>
</TouchableOpacity>
<TouchableOpacity onPress={onPress} style={styles.button}>
  <Text style={styles.friendbutton}>Friends</Text>
</TouchableOpacity>
              
                
            </View>
            
<View style={styles.buttonsContainer}><CustomButton onPress={() => {}} config={config.logoutButton}></CustomButton></View>
        </SafeAreaView></ScrollView>
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
    usernametext: {
        marginBottom:30,
        fontcolor:'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      details :{
        fontSize :20,
        fontWeight:'bold',
        textAlign :'left',
        marginTop:35
      },

      buttonsContainer: {
        alignItems: "center",
        marginTop: 30,
        width: "50%"
      },
  
    logoContainer: {
        marginBottom: 35,
        alignSelf: "center",
        alignItems: "center"
    },
    logostyle: {
        width: 680,
        height: 150,
        resizeMode: 'contain'
    },
    messagebutton: {
        marginTop:35,
        alignSelf:'center',
        width:"120%",
        backgroundColor:'white',
        padding: 20,
        borderRadius: 10
    },
    friendbutton: {
        marginTop:35,
        alignSelf:'center',
        width:"200%",
        backgroundColor:'white',
        padding: 20,
        borderRadius: 10
    },

    buttonText: {
        alignSelf:'center',
        color: 'black'
    }
    
     

})
export default CurrentUserPage;