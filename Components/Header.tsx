import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Header } from "react-native-elements";

export default function Head() {
  return (
    <View style={style.box}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  box: {
    backgroundColor: "#F6AE64",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
