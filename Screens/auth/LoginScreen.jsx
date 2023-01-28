import React, { useState, useEffect, useReducer } from "react";
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

import { ErrorText } from "../../components/ReUseComponents/ErrorText/ErrorText";

import { styles } from "./Log.styled";
import { authSignIn } from "../../redux/auth/authOperations";
import { validateEmail, validationPassword } from "../../helpers";

const initialState = {
  email: "",
  password: "",
};

const reducerInput = (state, actions) => {
  switch (actions.type) {
    case "Email": {
      return { ...state, email: actions.payload };
    }
    case "Password": {
      return { ...state, password: actions.payload };
    }
    default: {
      return state;
    }
  }
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [input, setInput] = useState(initialState);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [state, onDispatch] = useReducer(reducerInput, initialState);

  const dispatch = useDispatch();

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const handleLogin = () => {
    if (isValidEmail && isValidPassword && input.email) {
      Keyboard.dismiss();
      setIsShowKeyboard(false);

      dispatch(authSignIn(input));

      setInput(() => initialState);
    } else {
      console.log("Empty fields");
    }
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
        <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.7 : 0.6 }}>
          <Text style={styles.title}>Login</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: state.email ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Email"
                  onBlur={() => {
                    onDispatch({ type: "Email", payload: false });
                  }}
                  value={input.email}
                  onFocus={() => {
                    onDispatch({ type: "Email", payload: true });
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) => {
                    validateEmail(value, setIsValidEmail);
                    setInput((prev) => ({ ...prev, email: value }));
                  }}
                />
                {!isValidEmail ? <ErrorText text="Email invalid!" /> : ""}
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: state.password ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Password"
                  onBlur={() => {
                    onDispatch({ type: "Password", payload: false });
                  }}
                  secureTextEntry={true}
                  value={input.password}
                  onFocus={() => {
                    onDispatch({ type: "Password", payload: true });
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) => {
                    validationPassword(value, setIsValidPassword);
                    setInput((prev) => ({ ...prev, password: value }));
                  }}
                />
                {!isValidPassword ? (
                  <ErrorText text="Password should be example (Xx2$xxxx) at 8 character!" />
                ) : (
                  ""
                )}
              </View>
              <TouchableOpacity
                disabled={!isValidPassword}
                style={styles.button}
                onPress={handleLogin}
              >
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
