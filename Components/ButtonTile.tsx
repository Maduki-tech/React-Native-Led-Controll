import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ButtonTile() {
  return (
    <View>
      <SingeButtonTile />
    </View>
  );
}

function SingeButtonTile() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContriner: {},
});
