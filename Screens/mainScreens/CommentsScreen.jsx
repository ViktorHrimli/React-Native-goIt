import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>CommentsScreen</Text>
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
