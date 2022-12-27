import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const RegistrationsScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleFocuse = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  };
  return (
    <TouchableWithoutFeedback onPress={handleFocuse}>
      <ImageBackground
        source={require("../assets/img/PhotoBG.jpg")}
        style={styles.img}
      >
        <View
          style={{ ...styles.conteinerImg, top: isShowKeyboard ? 30 : 220 }}
        ></View>
        <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.8 : 0.6 }}>
          <Text style={styles.titleText}>Registration</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isShowKeyboard ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Name"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isShowKeyboard ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Email or Phone"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isShowKeyboard ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Password"
                  secureTextEntry={true}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleFocuse}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ color: "#1B4371", fontSize: 18 }}>Login?</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationsScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  conteiner: {
    flex: 0.7,
    flexDirection: "column",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 50,
  },
  conteinerImg: {
    position: "absolute",
    top: 220,
    left: "35%",
    width: 120,
    height: 120,
    zIndex: 1,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  titleText: {
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
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
    marginTop: 15,
    padding: 16,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
