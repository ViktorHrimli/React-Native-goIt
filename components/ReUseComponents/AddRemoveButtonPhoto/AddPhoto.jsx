import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback, View } from "react-native";
import { getImageFromGallery } from "../../../helpers";

const AddButtonPhoto = ({ setImage }) => {
  const onClickAdd = async () => {
    setImage(await getImageFromGallery());
  };
  return (
    <View style={{ position: "absolute", zIndex: 200, right: -14, bottom: 15 }}>
      <TouchableWithoutFeedback onPress={onClickAdd}>
        <Ionicons
          style={{ color: "#FF6C00" }}
          name="ios-add-circle-outline"
          size={26}
          color="black"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export { AddButtonPhoto };
