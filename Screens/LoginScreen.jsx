import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useFonts } from "expo-font";

const initialState = {
  email: "",
  password: "",
};

import { styles } from "./Log.styled";

const Login = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [input, setInput] = useState(initialState);

  const [fontsLoaded] = useFonts({
    "Silvana-1": require("../assets/fonts/Sevillana-Regular.ttf"),
  });

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const handleFocuse = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);

    console.log(input);
    setInput(() => initialState);
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("../assets/img/PhotoBG.jpg")}
        style={styles.image}
      >
        <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.7 : 0.6 }}>
          <Text style={styles.title}>Login</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email or Phone"
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, email: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, password: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleFocuse}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ color: "#1B4371", fontSize: 18 }}>Sign Up?</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Login;
