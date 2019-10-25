import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  SafeAreaView
} from "react-native";
import Constants from "expo-constants";

class Horizontal extends Component {
  render() {
    return (
      <View>
        <View barStyle="light-content" style={styles.statusBar} />
        <ScrollView horizontal={true} pagingEnabled={true}>
          <View style={styles.outer}>
            <Text style={styles.innerText}>Hello 👐👋🤙🍻🥂</Text>
          </View>
          <View style={[styles.outer, styles.red]}>
            <Text style={styles.innerText}>I am Pravash 👹</Text>
          </View>
          <View style={[styles.outer, styles.green]}>
            <Text style={styles.innerText}>Good Evening...⛈🌩🌧</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Horizontal;

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#0ABFBC",
    height: Constants.statusBarHeight
  },
  outer: {
    backgroundColor: "#007bb8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  red: {
    backgroundColor: "#dd4b39"
  },
  green: {
    backgroundColor: "#27ae60"
  },
  innerText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900"
  }
});
