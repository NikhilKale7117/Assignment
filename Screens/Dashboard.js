import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Pie from 'react-native-pie';

const Dashboard = ({navigation}) => {
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
      <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
        <View style={{padding: 15, alignItems: 'center'}}>
          <Pie
            radius={80}
            innerRadius={70}
            sections={[
              {
                percentage: 40,
                color: '#f00',
              },
            ]}
            backgroundColor="#ddd"
          />
          <Text>Monthly Score</Text>
        </View>
        <View style={{padding: 15, alignItems: 'center'}}>
          <Pie
            radius={80}
            innerRadius={70}
            sections={[
              {
                percentage: 90,
                color: 'green',
              },
            ]}
            backgroundColor="#ddd"
          />
          <Text>Daily Score</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Pie
          radius={120}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          dividerSize={10}
          strokeCap={'butt'}
        />
        <Text> Total Score</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('LogIn')}
        style={styles.signIn}>
        <Text style={styles.textSign}> Logout </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

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
  Register: {
    marginTop: 40,
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
    backgroundColor: 'red',
    marginTop: 40,
  },
});
