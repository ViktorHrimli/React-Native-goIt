import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/LoginScreen";
import RegistrationsScreen from "./Screens/RegistrationsScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      {/* <RegistrationsScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
