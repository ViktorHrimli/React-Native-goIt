import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const ProfileScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/PhotoBG.jpg")}
      style={styles.img}
    ></ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
});
