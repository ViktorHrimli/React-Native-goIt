import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [width, setwidth] = useState(Dimensions.get("screen").width - 32);
  const [count, setcount] = useState(0);

  return (
    <ImageBackground
      source={require("../../assets/img/PhotoBG.jpg")}
      style={styles.img}
    >
      <View style={styles.conteiner}>
        <ImageBackground
          borderRadius={16}
          source={require("../../assets/img/photo_2022-12-27_02-15-19.jpg")}
          style={styles.conteiner_img}
        ></ImageBackground>
        <Text style={styles.title_name}>Viktor Hrimli</Text>
        <ImageBackground
          style={{ ...styles.conteiner_img_post, width }}
          borderRadius={8}
          source={require("../../assets/img/wood.jpg")}
        ></ImageBackground>
        <Text style={styles.text_title}>Wood</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginTop: 8,
          }}
        >
          <View style={styles.like_conteiner}>
            <Feather
              name="message-circle"
              size={21}
              color="#FF6C00"
              style={{ marginRight: 7 }}
              onPress={() => navigation.navigate("Comment")}
            />
            <Text style={styles.count_comment}>0</Text>
          </View>
          <View style={styles.comment_conteiner}>
            <Feather
              style={{ marginRight: 7 }}
              name="thumbs-up"
              size={18}
              color="#FF6C00"
              onPress={() => setcount((prev) => prev + 1)}
            />
            <Text style={styles.count_comment}>{count}</Text>
          </View>
          <View style={styles.location_conteiner}>
            <Feather style={{}} name="map-pin" size={18} color="#BDBDBD" />
            <Text style={{ marginLeft: 8, color: "#212121", fontSize: 16 }}>
              Ukraine
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  conteiner: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  conteiner_img: {
    width: 120,
    height: 120,
    top: -80,
  },
  title_name: {
    fontSize: 30,
    lineHeight: 35,
    marginTop: -50,
    marginBottom: 33,
    fontWeight: "500",
  },
  conteiner_img_post: {
    marginBottom: 8,
    width: 343,
    height: 250,
  },
  text_title: {
    fontFamily: "Silvana-1",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginRight: "auto",
  },
  comment_conteiner: {
    flexDirection: "row",
  },
  like_conteiner: {
    flexDirection: "row",
  },
  count_comment: {
    fontSize: 15,
    color: "#212121",
    marginRight: 29,
  },
  location_conteiner: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 140,
  },
});
