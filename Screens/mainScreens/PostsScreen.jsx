import React, { useEffect, useState, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";

const initialState = {
  title: "",
  location: "",
};

const PostsScreen = ({ navigation }) => {
  const [input, setInput] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [type, setType] = useState(CameraType.front);
  const [snap, setSnap] = useState(null);
  const [photo, setphoto] = useState(null);
  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const cameraRef = useRef(null);

  const takeSnap = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    setphoto(photo.uri);
  };

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const toggleCamera = () =>
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );

  const onHandleSubmit = () => {
    setInput(initialState);
    navigation.navigate("Map");
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);
  });

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.conteiner}>
        <Camera style={{ borderRadius: 8 }} type={type} ref={cameraRef}>
          <View style={styles.conteiner_skeleton}>
            {photo && (
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              >
                <Image
                  source={{ uri: photo }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={takeSnap}
              delayLongPress={500}
              onLongPress={toggleCamera}
            >
              <View style={styles.conteiner_addPhoto}>
                <MaterialIcons name="photo-camera" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
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
    </ScrollView>
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
    width: 343,
    height: 250,
  },
  conteiner_addPhoto: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  text_addPhotot: {
    fontFamily: "Silvana-1",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,

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
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
  },
});
