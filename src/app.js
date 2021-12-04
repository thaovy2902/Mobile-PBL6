import * as React from 'react';

import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './containers/auth/Login';
import { ForgotPassWord } from './containers/auth/ForgotPassWord';
import { MainMenu } from './containers/MainMenu';
import { CompanyCalendar } from './containers/company-calendar/CompanyCalendar';
import { CalendarDetail } from './containers/company-calendar/CalendarDetail';
import { Lunch } from './containers/lunch/Lunch';
import { Request } from './containers/absence/request/Request';
import { Leave } from './containers/absence/leave/Leave';
import { Employee } from './containers/employee/Employee';
import { LunchCalendar } from './containers/lunch/LunchCalendar';
import { LunchCalendarOptions } from './containers/lunch/LunchCalendarOptions';
import { PersonalInformation } from './containers/profile/PersonalInformation';

const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreLogs([
    'Warning: ...',
    'DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release.',
    'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  ]);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='LoginSuccess' component={MainMenu} />
        <Stack.Screen name='ForgotPassWord' component={ForgotPassWord} />
        <Stack.Screen name='CompanyCalendar' component={CompanyCalendar} />
        <Stack.Screen name='CalendarDetail' component={CalendarDetail} />
        <Stack.Screen name='MainMenu' component={MainMenu} />
        <Stack.Screen name='Lunch' component={Lunch} />
        <Stack.Screen name='Request' component={Request} />
        <Stack.Screen name='Leave' component={Leave} />
        <Stack.Screen name='Employee' component={Employee} />
        <Stack.Screen name='LunchCalendar' component={LunchCalendar} />
        <Stack.Screen
          name='LunchCalendarOptions'
          component={LunchCalendarOptions}
        />
        <Stack.Screen name='Profile' component={PersonalInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
