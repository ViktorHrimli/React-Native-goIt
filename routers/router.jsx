import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { TouchableOpacity, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//
import LoginScreen from "../Screens/auth/LoginScreen";
import RegistrationsScreen from "../Screens/auth/RegistrationsScreen";
import HomeScreen from "../Screens/mainScreens/HomeScreen";
import MapScreen from "../Screens/mainScreens/MapScreen";
import CommentsScreen from "../Screens/mainScreens/CommentsScreen";
import PostsScreen from "../Screens/mainScreens/PostsScreen";
import ProfileScreen from "../Screens/mainScreens/ProfileScreen";

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
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "#000",
        tabBarActiveTintColor: "#fff",
        tabBarHideOnKeyboard: true,
      }}
    >
      <MainTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <View
              style={{
                paddingRight: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Fuck off i log out")}
              >
                <Feather name="log-out" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          title: "Publications",
          headerRightContainerStyle: true,
          tabBarIcon: (focused, size, color) => {
            return <AntDesign name="appstore-o" size={24} color={color} />;
          },
        }}
      />
      <MainTabs.Screen
        name="Post"
        component={PostsScreen}
        options={{
          headerLeft: () => (
            <View
              style={{
                paddingLeft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Fuck off i log out")}
              >
                <Ionicons name="arrow-back-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          title: "Create publications",
          tabBarIcon: (focused, size, color) => {
            return <Ionicons name="md-add-outline" size={23} color={color} />;
          },
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: () => {},
          tabBarIcon: (focused, size, color) => {
            return (
              <Ionicons name="md-person-outline" size={24} color="black" />
            );
          },
        }}
      />
      <MainTabs.Screen
        name="Comment"
        component={CommentsScreen}
        options={{
          title: "Comment Screen",
          headerLeft: () => (
            <View
              style={{
                paddingLeft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Return me back pls")}
              >
                <Ionicons name="arrow-back-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: () => {},
          tabBarButton: () => {},
        }}
      />
      <MainTabs.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map Screen",
          headerLeft: () => (
            <View
              style={{
                paddingLeft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Return me back pls")}
              >
                <Ionicons name="arrow-back-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: () => {},
          tabBarButton: () => {},
        }}
      />
    </MainTabs.Navigator>
  );
};

export default useRouting;
