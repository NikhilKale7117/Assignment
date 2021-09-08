import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorMobile, setErrorMobile] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordCheck, setErrorPasswordCheck] = useState('');
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState('');

  const nameRef = createRef();
  const mobileRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordCheckRef = createRef();
  const registerButtonRef = createRef();

  const RegisterUser = () => {
    let userData = {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
    };
    if (
      errorName === 'NoError' &&
      errorMobile === 'NoError' &&
      errorEmail === 'NoError' &&
      errorPassword === 'NoError' &&
      errorPasswordCheck === 'NoError'
    ) {
      Alert.alert('Registration Successful!', '', [
        {
          text: 'Log In',
          onPress: () => {
            StoreData(userData);
          },
        },
      ]);
    } else {
      Alert.alert('Please enter valid information!');
      return;
    }
  };

  const StoreData = async userData => {
    try {
      const userDataJSON = JSON.stringify(userData);
      if (userDataJSON) {
        await AsyncStorage.setItem('@RegisterUser', userDataJSON);

        LogInUser();
        // getData();
      }
    } catch (err) {
      console.log('error storing register user', err);
    }
  };

  const LogInUser = () => {
    navigation.navigate('LogIn');
  };
  return (
    <ScrollView style={styles.container}>
      <Text
        style={[
          styles.text,
          {alignSelf: 'center', paddingBottom: 40, fontSize: 35},
        ]}>
        Register
      </Text>
      <KeyboardAvoidingView enabled>
        <View>
          <Text style={styles.text}>Name</Text>
          <View style={styles.Placeholder}>
            <TextInput
              ref={nameRef}
              placeholder="Enter Name"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="sentences"
              returnKeyType="next"
              onChangeText={input => {
                setName(input);
                if (name.length > 4) {
                  setErrorName('NoError');
                } else {
                  setErrorName('Error');
                }
              }}
              onSubmitEditing={() => mobileRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          {errorName === '' ? null : errorName === 'Error' ? (
            <Text style={{color: 'red'}}>Required min 4 charactors</Text>
          ) : (
            <Text style={{color: 'green'}}> Accepted </Text>
          )}
        </View>
        <View>
          <Text style={styles.text}>Mobile Number</Text>
          <View style={styles.Placeholder}>
            <TextInput
              ref={mobileRef}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={mobile => {
                setMobile(mobile);
                var verify = new RegExp(/^[0-9\b]+$/);
                if (verify.test(mobile) && mobile.length === 10) {
                  setErrorMobile('NoError');
                } else {
                  setErrorMobile('Error');
                }
              }}
              onSubmitEditing={() => emailRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          {errorMobile === '' ? null : errorMobile === 'Error' ? (
            <Text style={{color: 'red'}}>Invalid Mobile Number</Text>
          ) : (
            <Text style={{color: 'green'}}> Accepted </Text>
          )}
        </View>
        <View>
          <Text style={styles.text}>Email</Text>
          <View style={styles.Placeholder}>
            <TextInput
              ref={emailRef}
              placeholder="Enter Email"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={input => {
                setEmail(input);
                let verify = new RegExp(
                  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                );
                if (verify.test(email)) {
                  setErrorEmail('NoError');
                } else {
                  setErrorEmail('Error');
                }
              }}
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          {errorEmail === '' ? null : errorEmail === 'Error' ? (
            <Text style={{color: 'red'}}>Invalid Email</Text>
          ) : (
            <Text style={{color: 'green'}}> Accepted </Text>
          )}
        </View>
        <View>
          <Text style={styles.text}>Password</Text>
          <View style={styles.Placeholder}>
            <TextInput
              ref={passwordRef}
              placeholder="Enter Password"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={password => {
                setPassword(password);
                if (password.length >= 8) {
                  setErrorPassword('NoError');
                } else {
                  setErrorPassword('Error');
                }
                if (passwordCheck === password) {
                  setErrorPasswordCheck('NoError');
                } else {
                  setErrorPasswordCheck('Error');
                }
              }}
              onSubmitEditing={() => passwordCheckRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          {errorPassword === '' ? null : errorPassword === 'Error' ? (
            <Text style={{color: 'red'}}>Required min 8 charactors</Text>
          ) : (
            <Text style={{color: 'green'}}> Accepted </Text>
          )}
        </View>
        <View>
          <Text style={styles.text}>Retype Password</Text>
          <View style={styles.Placeholder}>
            <TextInput
              ref={passwordCheckRef}
              placeholder="Retype Password"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={passwordCheck => {
                setPasswordCheck(passwordCheck);
                if (passwordCheck === password) {
                  setErrorPasswordCheck('NoError');
                } else {
                  setErrorPasswordCheck('Error');
                }
              }}
              onSubmitEditing={() => registerButtonRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          {errorPasswordCheck === '' ? null : errorPasswordCheck === 'Error' ? (
            <Text style={{color: 'red'}}>Password don't match</Text>
          ) : (
            <Text style={{color: 'green'}}>Matched</Text>
          )}
        </View>

        <TouchableOpacity
          ref={registerButtonRef}
          onPress={() => RegisterUser()}
          style={styles.signIn}>
          <Text style={styles.textSign}>Register</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {alignSelf: 'center', paddingVertical: 5, fontSize: 15},
          ]}
          onPress={() => navigation.goBack()}>
          Back
        </Text>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
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
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'gray',
  },
  Placeholder: {
    borderColor: 'gray',
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
  },
});
