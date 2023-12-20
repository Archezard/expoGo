import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function List({ element, deleteHandler }) {
  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => deleteHandler(element.key)}
    >
      <Text style={styles.text}>{element.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    textAlign: "center",
    borderRadius: 10,
    borderColor: "#0095b6",
    borderWidth: 3,
    marginTop: 20,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0095b6",
    overflow: "hidden",
    margin: "auto",
  },
  touchableOpacity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
  },
});
