import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import CameraScreen from "../../components/Camera/NewCamera";

const CommentsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <CameraScreen />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "flex-start",
  },
});
