import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class UserInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.apiCall();
  }

  async apiCall() {
    let resp = await fetch(
      'http://5d80a75f99f8a20014cf9661.mockapi.io/api/login',
    );
    let respJason = await resp.json();
    console.log(respJason);
    this.setState({data: respJason});
  }

  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Feather
            name="edit"
            color="black"
            size={30}
            style={{alignSelf: 'center'}}
          />
          <Text>Edit</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>Username -</Text>
          <View style={styles.Placeholder}>
            <TextInput
              placeholder={this.state.data.name}
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Email ID -</Text>
          <View style={styles.Placeholder}>
            <TextInput
              placeholder={this.state.data.email}
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View>
          <Text style={styles.text}>Phone Number-</Text>
          <View style={styles.Placeholder}>
            <TextInput
              placeholder={this.state.data.phone}
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default UserInfo;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginBottom: 7,
    color: 'gray',
    marginTop: 35,
  },
  Container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  Placeholder: {
    borderColor: 'gray',
    height: 50,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: 'black',
  },
});
