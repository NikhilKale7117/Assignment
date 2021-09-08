import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import LogIn from '../Screens/Login';
import UserInfo from '../Screens/UserInfo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash Screen" component={Splash} />
        <Stack.Screen name="LogIn Screen" component={LogIn} />
        <Stack.Screen name="UserInfo Screen" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
