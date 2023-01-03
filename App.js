import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/LoginScreen";
import RegistrationsScreen from "./Screens/RegistrationsScreen";
export default function App() {
  return (
    <React.StrictMode>
      <View style={styles.container}>
        {/* <Login /> */}
        <RegistrationsScreen />
        <StatusBar style="auto" />
      </View>
    </React.StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
