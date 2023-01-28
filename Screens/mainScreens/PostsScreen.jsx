import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";

import FormPost from "../../components/FormPost/FormPost";

const PostsScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  // premissions state

  const [type, setType] = useState(CameraType.back);
  const [photo, setphoto] = useState(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const cameraRef = useRef(null);

  const takeSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };

      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      setphoto(source);

      // show preview
      if (source) {
        cameraRef.current.pausePreview();
        setIsPreview(true);
      }
    }
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();

    setIsPreview(false);
  };

  const toggleCamera = () =>
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );

  // +================================ PREMISSIONS

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.conteiner}>
        <Camera
          ref={cameraRef}
          type={type}
          style={styles.conteiner_skeleton}
          onCameraReady={() => setCameraReady(true)}
          onMountError={(error) => {
            console.log("camera error", error);
          }}
        >
          <TouchableOpacity
            onPress={takeSnap}
            delayLongPress={500}
            onLongPress={toggleCamera}
            disabled={!cameraReady}
          >
            {!isPreview && (
              <View style={styles.conteiner_addPhoto}>
                <MaterialIcons name="photo-camera" size={24} color="#fff" />
              </View>
            )}
            {isPreview && (
              <Ionicons
                onPress={cancelPreview}
                name="close-circle-sharp"
                size={44}
                style={{ opacity: 0.5 }}
                color="black"
              />
            )}
          </TouchableOpacity>
        </Camera>

        <Text style={styles.text_addPhotot}>Upload photo</Text>
        <FormPost
          navigation={navigation}
          photo={photo}
          cancelPrev={cancelPreview}
        />
      </SafeAreaView>
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
  text_addPhotot: {
    fontFamily: "Silvana-1",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,

    marginRight: "auto",
    marginLeft: 24,
  },
  conteiner_skeleton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
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
});
