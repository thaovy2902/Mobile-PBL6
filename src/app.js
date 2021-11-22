import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassWord } from "./containers/ForgotPassWord";
import { Login } from "./containers/Login";
import { MainMenu } from "./containers/MainMenu";
import { CompanyCalendar } from "./containers/CompanyCalendar";
import { CalendarDetail } from "./containers/CalendarDetail";
import { Lunch } from "./containers/Lunch";
import { Request } from "./containers/Request";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginSuccess" component={MainMenu} />
        <Stack.Screen name="ForgotPassWord" component={ForgotPassWord} />
        <Stack.Screen name="CompanyCalendar" component={CompanyCalendar} />
        <Stack.Screen name="CalendarDetail" component={CalendarDetail} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Lunch" component={Lunch} />
        <Stack.Screen name="Request" component={Request} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
