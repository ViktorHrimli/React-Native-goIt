import React from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";

const Login = () => {
  return (
    <ImageBackground
      source={require("../assets/img/PhotoBG.jpg")}
      style={styles.image}
    >
      <View style={styles.conteiner}>
        <Text style={styles.title}>Войти</Text>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  conteiner: {
    flex: 0.6,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 32,
  },
  title: {
    fontSize: "30",
    lineHeight: "35",
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
});
