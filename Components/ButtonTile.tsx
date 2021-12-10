import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { callURL } from "../js/functions";

const data = [
  {
    name: "Rainbow",
    image: require("../Assets/rainbow.png"),
    uriData: "rainbow",
  },
  {
    name: "Christmas",
    image: require("../Assets/christmas.png"),
    uriData: "christmas",
  },
  {
    name: "Color Picker",
    image: require("../Assets/colorpicker.jpeg"),
    uriData: "color",
  },
  {
    name: "Led Strip",
    image: require("../Assets/ledstrip.jpeg"),
    uriData: "color",
  },
];

export default function ButtonTile() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {data.map((item, index) => {
        return (
          <SingeButtonTile
            name={item.name}
            image={item.image}
            key={index}
            uriData={item.uriData}
          />
        );
      })}
    </View>
  );
}

function SingeButtonTile(props: { name: string; image: any; uriData: string }) {
  return (
    <TouchableOpacity onPress={() => callURL(props.uriData)}>
      <View style={styles.container}>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.bild}
            // source={require("../Assets/christmas.png")}
            source={props.image}
          />

          <Text
            style={{
              fontSize: 14,
              color: "white",
              paddingTop: 30,
            }}
          >
            {props.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 170,
    margin: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  bild: {
    height: 80,
    width: 80,
  },
});
