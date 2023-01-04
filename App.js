import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
{
  /*  */
  // <MaterialIcons name="delete-outline" size={24} color="black" />;
}

//
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationsScreen from "./Screens/auth/RegistrationsScreen";
import HomeScreen from "./Screens/mainScreens/HomeScreen";
import MapScreen from "./Screens/mainScreens/MapScreen";
import CommentsScreen from "./Screens/mainScreens/CommentsScreen";
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";

const Stack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

const useRouting = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }
  return (
    <MainTabs.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <MainTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (focused, size, color) => {},
        }}
      />
      {/* <MainTabs.Screen name="Comment" component={CommentsScreen} /> */}
      <MainTabs.Screen
        name="Post"
        component={PostsScreen}
        options={{
          tabBarIcon: (focused, size, color) => {
            return <Ionicons name="md-add-outline" size={24} color="black" />;
          },
          tabBarBackground: (color, size) => {
            return;
          },
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (focused, size, color) => {
            return <Octicons name="person-fill" size={24} color="black" />;
          },
        }}
      />
    </MainTabs.Navigator>
  );
};

export default function App() {
  const [auth, setAuth] = useState(true);

  const [fontsLoaded] = useFonts({
    "Silvana-1": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const routing = useRouting(auth);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>{routing}</NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
