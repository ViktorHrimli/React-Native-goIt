import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

import { authSignUp } from "../../redux/auth/authOperations";
// components

import { AddButtonPhoto } from "../../components/ReUseComponents/AddRemoveButtonPhoto/AddPhoto";
import { RemoveButtonPhoto } from "../../components/ReUseComponents/AddRemoveButtonPhoto/RemovePhoto";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const RegistrationsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [image, setImage] = useState(null);
  const [input, setInput] = useState(initialState);

  const dispatch = useDispatch();

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);

    dispatch(authSignUp({ ...input, photo: image }));
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
            <RemoveButtonPhoto setImage={setImage} />
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
                    borderColor: isShowKeyboard ? "#FF6C00" : "#e8e8e8",
                  }}
                  placeholder="Name"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={input.name}
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, name: value }))
                  }
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
                  value={input.email}
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, email: value }))
                  }
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
                  value={input.password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setInput((prev) => ({ ...prev, password: value }))
                  }
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
