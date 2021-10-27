import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
// import { Login } from './components/Login';
import { ForgotPassWord } from './components/ForgotPassWord';
import { Login } from './components/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="ForgotPassWord"
          component={ForgotPassWord}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

