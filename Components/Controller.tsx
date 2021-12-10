import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Power from "react-native-vector-icons/AntDesign";

export default function Controller() {
  return (
    <View style={style.container}>
      <TouchableOpacity>
        <View style={style.circleButton}>
          <Power name="poweroff" size={70} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  circleButton: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "black",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
});
