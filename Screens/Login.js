import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {

  const [data, setData] = React.useState({
    
    check_textInputChange: false,
    
});

  const textInputChange = (val) => {
    if( val.trim().length >= 4 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false
        });
    }
}
const loginHandle =(username, password)=>{
  signIn(username,password);
}

  return (
    <View style={styles.Container}>
      <View>
        <Text style={styles.text}>Username</Text>
        <View style={styles.Placeholder}>
          <TextInput
            placeholder="Enter Username"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          
        </View>
        {data.check_textInputChange ? 
                <Text> Accepted </Text>
                : <Text>Min 4 charactors</Text>}
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.Placeholder}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#666666"
            
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
      </View>
      <TouchableOpacity 
      onPress={() => navigation.navigate('UserInfo Screen')}  
      style={styles.signIn}>
        <Text style={styles.textSign}> Sign In </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'gray',
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
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 18,
    marginBottom: 7,
    color: 'gray',
    marginTop: 35,
  },
  Placeholder: {
    borderColor: 'gray',
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
  },
});
