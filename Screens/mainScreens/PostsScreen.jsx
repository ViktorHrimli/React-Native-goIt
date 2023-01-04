import React from "react";
import { Text, View, StyleSheet } from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>PostScreen</Text>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "flex-start",
  },
});
