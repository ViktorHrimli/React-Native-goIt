import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { uploadPhonoInStorage, uploadPostOnDataBase } from "../../FireBase/";

const initialState = {
  title: "",
  location: "",
};

const FormPost = ({ navigation, photo, location }) => {
  const [input, setInput] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const { userId, name } = useSelector((state) => state.verify);
  // width
  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const onHandleSubmit = async () => {
    // upload file in storage
    const newPhoto = uploadPhonoInStorage(photo);

    navigation.navigate("Home");

    uploadPostOnDataBase({
      input,
      newPhoto,
      location: location.coords,
      userId,
      name,
    });

    setInput(initialState);
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
  });

  return (
    <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Title..."
          onFocus={() => setIsShowKeyboard(true)}
          value={input.title}
          onChangeText={(value) =>
            setInput((prev) => ({ ...prev, title: value }))
          }
        />
      </View>
      <View style={{ position: "relative" }}>
        <Feather
          style={{ position: "absolute", top: 15, left: 0 }}
          name="map-pin"
          size={18}
          color="#BDBDBD"
        />
        <TextInput
          style={{ ...styles.input, paddingLeft: 24 }}
          placeholder="Location"
          onFocus={() => setIsShowKeyboard(true)}
          value={input.location}
          onChangeText={(value) =>
            setInput((prev) => ({ ...prev, location: value }))
          }
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={onHandleSubmit}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clear_conteiner}
        onPress={() => setInput(initialState)}
      >
        <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

export default FormPost;

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 16,
    flexDirection: "column",
    marginTop: 48,
  },
  input: {
    fontFamily: "Silvana-1",
    marginBottom: 32,
    backgroundColor: "transparent",
    borderColor: "#e8e8e8",
    fontFamily: "Silvana-1",
    color: "#212121",
    textAlign: "left",
    padding: Platform.OS === "ios" ? 14 : 10,
    fontSize: Platform.OS === "ios" ? 16 : 14,
    borderBottomWidth: 1,
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
    fontFamily: "Silvana-1",
    color: "#fff",
    fontSize: 16,
    lineHeight: 19,
  },
  clear_conteiner: {
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
