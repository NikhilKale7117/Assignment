import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Screens/Register';
import LogIn from './Screens/Login';
import Dashboard from './Screens/Dashboard';
import Profile from './Screens/Profile';
import ImageSelect from './Screens/ImageSelect';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        >
        <Stack.Screen name="LogIn" component={LogIn} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
          title: 'Dashboard',
          headerTitleAlign: 'center',
          headerBackVisible:false,
        }}/>
        <Stack.Screen name="Profile" component={Profile} options={{
          headerTitleAlign:"center",
        }}/>
        <Stack.Screen name="ImageSelect" component={ImageSelect} options={{
          headerTitleAlign:"center",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
