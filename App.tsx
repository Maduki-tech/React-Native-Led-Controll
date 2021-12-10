import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import LedAdd from "./screens/LedAdd";
import LedControll from "./screens/LedControll";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
      }}
    >
      <ImageBackground
        source={require("./Assets/background.jpeg")}
        style={{ width: "100%", height: "100%" }}
      >
        <LedControll />
      </ImageBackground>
    </SafeAreaView>
  );
}
