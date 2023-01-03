import React from "react";
import { StatusBar } from "expo-status-bar";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";

//
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationsScreen from "./Screens/auth/RegistrationsScreen";

const Stack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegistrationsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
