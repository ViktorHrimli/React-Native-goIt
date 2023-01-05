import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.profile_conteiner}>
        <Image
          style={styles.image}
          source={require("../../assets/img/photo_2022-12-27_02-15-19.jpg")}
        />
        <View style={{ marginLeft: 8 }}>
          <Text style={styles.name}>Viktor Hrimli</Text>
          <Text style={styles.email}>ViktorHrimli@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 32,
  },
  profile_conteiner: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginRight: "auto",
    marginLeft: 25,
    marginBottom: 32,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 16,
  },
  name: {
    color: "#212121",
    fontSize: 15,
    lineHeight: 18,
    fontWeight: "700",
  },
  email: {
    color: "rgba(33, 33, 33, 0.8)",
    fontSize: 13,
    lineHeight: 15,
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
});
