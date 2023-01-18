import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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

import { styles } from "./Log.styled";
import { authSignIn } from "../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [input, setInput] = useState(initialState);

  const dispatch = useDispatch();

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const handleLogin = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);

    dispatch(authSignIn(input));

    setInput(() => initialState);
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("../../assets/img/PhotoBG.jpg")}
        style={styles.image}
      >
        <View
          style={{ ...styles.conteinerImg, top: isShowKeyboard ? 70 : 240 }}
        ></View>
        <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.7 : 0.6 }}>
          <Text style={styles.title}>Login</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={input.email}
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
                  value={input.password}
                  secureTextEntry={true}
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, password: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text
                    style={{
                      color: "#2a345f",
                      fontSize: 18,
                      fontFamily: "Silvana-1",
                    }}
                  >
                    Sign Up?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
