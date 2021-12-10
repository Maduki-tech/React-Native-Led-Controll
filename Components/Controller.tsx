import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Power from "react-native-vector-icons/AntDesign";
import { callURL } from "../js/functions";

export default function Controller() {
  const [power, setPower] = useState("on");

  const changePower = () => {
    if (power === "on") {
      setPower("off");
      callURL("off");
    } else {
      setPower("on");
      callURL("on");
    }
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => changePower()}>
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
