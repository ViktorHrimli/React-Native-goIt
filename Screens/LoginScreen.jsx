import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

const Login = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleFocuse = () => {
    setIsShowKeyboard(true);
  };

  return (
    <ImageBackground
      source={require("../assets/img/PhotoBG.jpg")}
      style={styles.image}
    >
      <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.7 : 0.6 }}>
        <Text style={styles.title}>Login</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.form}>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email or Phone"
                onFocus={handleFocuse}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={handleFocuse}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text style={{ color: "#1B4371", fontSize: 18 }}>Sign Up?</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
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
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 16,
  },
  title: {
    fontSize: 32,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  form: {
    marginTop: 33,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#e8e8e8",
    color: "#212121",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 23,
    padding: 16,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
