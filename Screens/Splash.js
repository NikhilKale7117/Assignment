import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'

const Splash = ({navigation}) => {
    return (
        <View style={styles.maincont}>
            <Image style={{height:250,width:250, alignItems:"center",justifyContent:"center",resizeMode:"center"}}
            source={require('../Components/Images/logo.png')}/>
            <Text style={styles.text}> Splash Screen</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('LogIn Screen')} 
            style={styles.signIn}>
        <Text style={styles.textSign}>Click to Sign In</Text>
      </TouchableOpacity>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    maincont:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:22,
        fontWeight:"bold",
        color:"white",
        marginTop:100
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'gold',
        borderWidth: 1,
        backgroundColor: 'gold',
        marginTop: 40,
      },

})
