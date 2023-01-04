import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "flex-start",
  },
});
