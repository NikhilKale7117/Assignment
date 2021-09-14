import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const passwordRef = React.createRef();

  const getData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('@RegisterUser');
      if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        return userData;
      }
    } catch (err) {
      console.log('error getting loggedin user', err);
    }
  };

  const signIn = async () => {
    const userData = await getData();
    if (!username) {
      Alert.alert('Please enter email/mobile');
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
      return;
    }

    console.log(userData.mobile, userData.email, userData.password);
    if (!userData) {
      Alert.alert('Invalid Input!');
    } else if (username === userData.mobile || username === userData.email) {
      if (password === userData.password) {
        navigation.navigate('Profile');
      } else if (password !== userData.password) {
        Alert.alert('Incorrect Password!');
      }
    } else {
      Alert.alert('Incorrect Email/Mobile or User is not registred!', '', [
        {text: 'Cancel'},
        {
          text: 'Register',
          onPress: () => {
            navigation.navigate('Register');
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.Container}>
      <Text
        style={[
          styles.text,
          {
            alignSelf: 'center',
            paddingBottom: 40,
            fontSize: 35,
            fontWeight: 'bold',
          },
        ]}>
        Sign In
      </Text>
      <View>
        <Text style={styles.text}>Email/Mobile</Text>
        <View style={styles.Placeholder}>
          <TextInput
            placeholder="Enter Username"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={username => setUsername(username)}
            onSubmitEditing={() => {
              passwordRef.current?.focus();
            }}
            blurOnSubmit={false}
          />
        </View>
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.Placeholder}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#666666"
            ref={passwordRef}
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={password => setPassword(password)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => signIn()} style={styles.signIn}>
        <Text style={styles.textSign}> Sign In </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.Register}>
        <Text style={styles.textSign}> Don't have account? Register </Text>
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
  Register: {
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
    color: 'black',
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
