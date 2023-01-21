import React, { useState } from "react";
// icons
import { AntDesign } from "@expo/vector-icons";

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { uoloadComment } from "../../FireBase/fireBaseDB";
import { useSelector } from "react-redux";

const CommentsScreen = ({ route }) => {
  const [widht, setWidht] = useState(Dimensions.get("window").width);
  const [comment, setComment] = useState("");

  const { name, userId } = useSelector((state) => state.verify);
  const id = route.params;

  const date = new Date();

  console.log();

  const handleCreateComment = () => {
    uoloadComment(comment, name, id, userId, date.toLocaleString());
    setComment("");
  };

  return (
    <View style={styles.conteiner}>
      <View style={styles.conteiner_posts}>
        <Image
          style={styles.image_posts}
          source={require("../../assets/img/wood.jpg")}
        ></Image>
      </View>
      <ScrollView style={{ paddingTop: 32 }}>
        <View style={styles.conteiner_comments}>
          <Image
            source={require("../../assets/img/photo_2022-12-27_02-15-19.jpg")}
            style={styles.user_photo}
          />
          <View style={styles.post}>
            <Text style={{ ...styles.post_message, width: widht - 100 }}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.post_time}>09 июня, 2020 | 08:40</Text>
          </View>
        </View>
        <View style={styles.conteiner_comments}>
          <Image
            source={require("../../assets/img/photo_2022-12-27_02-15-19.jpg")}
            style={styles.user_photo}
          />
          <View style={styles.post}>
            <Text style={{ ...styles.post_message, width: widht - 100 }}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.post_time}>09 июня, 2020 | 08:40</Text>
          </View>
        </View>
        <View style={styles.conteiner_comments}>
          <Image
            source={require("../../assets/img/photo_2022-12-27_02-15-19.jpg")}
            style={styles.user_photo}
          />
          <View style={styles.post}>
            <Text style={{ ...styles.post_message, width: widht - 100 }}>
              Really love your most recent photo. I’ve been trying to capture
              the same thing for a few months and would love some tips!
            </Text>
            <Text style={styles.post_time}>09 июня, 2020 | 08:40</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.create_comment}>
        <TouchableOpacity
          style={styles.button_post}
          onPress={handleCreateComment}
        >
          <AntDesign name="arrowup" size={24} color="#fff" />
        </TouchableOpacity>

        <TextInput
          value={comment}
          onChangeText={(value) => setComment(value)}
          style={styles.input}
          placeholder="Comments"
        />
      </View>
    </View>
  );
};

export default CommentsScreen;

const WIDTH = Dimensions.get("window").width - 32;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  conteiner_posts: {
    width: WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  image_posts: {
    width: WIDTH,
    borderRadius: 6,
  },
  conteiner_comments: {
    flexDirection: "row",
    marginBottom: 32,
  },
  post: {
    padding: 16,
    backgroundColor: "rgba(189, 189, 189, 0.3)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  post_message: {
    fontSize: 13,
    lineHeight: 18,

    color: "#212121",
  },
  post_time: {
    fontSize: 10,
    lineHeight: 12,
    marginLeft: "auto",
    color: "#BDBDBD",
  },
  user_photo: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 10,
  },
  create_comment: {
    position: "relative",
    marginTop: 5,
  },
  input: {
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
  },
  button_post: {
    position: "absolute",
    right: 10,
    top: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 200,

    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
  },
});
