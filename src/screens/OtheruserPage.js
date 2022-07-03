import React from 'react';
import { View, StyleSheet, Text, Image,ScrollView,Textarea } from 'react-native';
import { CSS_CONSTANTS } from '../utils/css-contants';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/button';
const checkValidation = () => {}
const onPress = () => {};
 
const config = {
    submitButton: {
        buttonText: 'Add friend',
        roundedButton: true
    }
    
}
const Otheruserpage =()=>{
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
                <Text style={styles.details}>HomeCoutnry : India </Text></View></View>
                <View style={{flex: 1}}>
<Text style ={styles.about}>Hello am monica . I am second Semester. I love to dance and cooking . I have basic coding knowlegde.
</Text>
</View>
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
      about:{
        marginTop:30,
        marginBottom:30,
        fontcolor:'black',
        fontSize: 15,
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
    }
   
    

})
export default Otheruserpage;