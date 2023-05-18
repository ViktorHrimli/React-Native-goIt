import React, { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
// icons

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
  Image,
} from "react-native";

import { styles } from "./Reg.styled";
// FIREBASE
// import { authSignUp } from "../../redux/auth/authOperations";
// FIREBASE
// API
import { SignInUser } from "../../api/auth/signin";
import { saveUserProfile, stateChangeUser } from "../../redux/auth/authSlice";
// API

import {
  validateName,
  validateEmail,
  validationPassword,
  reducerInput,
} from "../../helpers";
// components

import { AddButtonPhoto } from "../../components/ReUseComponents/AddRemoveButtonPhoto/AddPhoto";
import { RemoveButtonPhoto } from "../../components/ReUseComponents/AddRemoveButtonPhoto/RemovePhoto";
import { ErrorText } from "../../components/ReUseComponents/ErrorText/ErrorText";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const initSignInUser = new SignInUser();

const RegistrationsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [input, setInput] = useState(initialState);
  const [image, setImage] = useState(null);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [state, onDispatch] = useReducer(reducerInput, initialState);

  const dispatch = useDispatch();

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const handleSubmit = () => {
    if (isValidName && isValidEmail && isValidPassword && input.email) {
      Keyboard.dismiss();
      setIsShowKeyboard(false);
      // firebase actions
      // dispatch(authSignUp({ ...input, photo: image }));
      // firebase actions

      // api actions
      initSignInUser
        .createUser({ ...input, photo: image })
        .then(
          ({
            username: displayName,
            id: uid,
            email,
            avatarUrl: photoURL,
            token,
          }) => {
            dispatch(
              saveUserProfile({ displayName, uid, email, photoURL, token })
            );
          }
        );
      // api actions

      setInput(() => initialState);
    } else {
      console.log("empty field");
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
      onPress={(e) => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        source={require("../../assets/img/PhotoBG.jpg")}
        style={styles.img}
      >
        <View
          style={{
            ...styles.conteinerImg,
            top: isShowKeyboard ? 30 : 230,
            backgroundColor: image ? "#F6F6F6" : "#F6F6F6",
          }}
        >
          {!image ? (
            <AddButtonPhoto setImage={setImage} />
          ) : (
            <RemoveButtonPhoto />
          )}

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%", borderRadius: 16 }}
            />
          )}
        </View>
        <View style={{ ...styles.conteiner, flex: isShowKeyboard ? 0.8 : 0.6 }}>
          <Text style={styles.titleText}>Registration</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: state.username ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Username"
                  onBlur={() => {
                    onDispatch({ type: "username", payload: false });
                  }}
                  value={input.username}
                  onFocus={() => {
                    onDispatch({ type: "username", payload: true });
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) => {
                    validateName(value, setIsValidName);
                    setInput((prev) => ({ ...prev, username: value }));
                  }}
                />

                {!isValidName ? (
                  <ErrorText text="Name is required and at least 8 characters!" />
                ) : (
                  ""
                )}
              </View>

              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: state.email ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder={"Email"}
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
                  placeholder={"Password"}
                  passwordRules={{ minlenght: 8 }}
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
                    setInput((prev) => ({ ...prev, password: value }));
                    validationPassword(value, setIsValidPassword);
                  }}
                />

                {!isValidPassword ? (
                  <ErrorText text="Password should be example (Xx2$xxxx) at 8 character!" />
                ) : (
                  ""
                )}
              </View>
              <TouchableOpacity
                touchSoundDisabled={true}
                disabled={!isValidPassword}
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Send</Text>
              </TouchableOpacity>
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={{
                      color: "#1B4371",
                      fontSize: 18,
                      fontFamily: "Silvana-1",
                    }}
                  >
                    Sign In?
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

export default RegistrationsScreen;
