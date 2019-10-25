import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Horizontal from "./components/Horizontal";

export default function App() {
  return <Horizontal />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
