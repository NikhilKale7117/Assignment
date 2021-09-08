import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './Screens/Register';
import LogIn from './Screens/Login';
import Dashboard from './Screens/Dashboard';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
