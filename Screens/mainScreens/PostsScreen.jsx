import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

const initialState = {
  title: "",
  location: "",
};

const PostsScreen = ({ navigation }) => {
  const [input, setInput] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const onHandleSubmit = () => {
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
    <View style={styles.conteiner}>
      <TouchableOpacity onPress={() => console.log("add photo")}>
        <View style={styles.conteiner_skeleton}>
          <View style={styles.conteiner_addPhoto}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.text_addPhotot}>Upload photo</Text>
      <View style={{ ...styles.form, width: dimension - 20 * 2 }}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Title..."
            onFocus={() => setIsShowKeyboard(true)}
            value={input.name}
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
            value={input.email}
            onChangeText={(value) =>
              setInput((prev) => ({ ...prev, location: value }))
            }
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={onHandleSubmit}>
          <Text style={styles.buttonText}>Publish</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.clear_conteiner}
        onPress={() => console.log("clearMe")}
      >
        <FontAwesome name="trash-o" size={24} color="#BDBDBD" />
      </TouchableOpacity>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 32,
  },
  conteiner_skeleton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    width: 343,
    height: 250,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  conteiner_addPhoto: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#Fff",
  },
  text_addPhotot: {
    fontFamily: "Silvana-1",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginRight: "auto",
    marginLeft: 24,
  },
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
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
  },
});
