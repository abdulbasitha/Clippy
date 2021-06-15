import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from "react-native";
import Clippy from "./src/index";
const Root = (props) => (
  <View style={styles.container}>
     <StatusBar barStyle="light-content"/>
    <Clippy/>
  </View>
  )
export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});