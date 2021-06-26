import React from "react";
import {
  StyleSheet,
  StatusBar
} from "react-native";
import Clippy from "./src/index";
import { Block } from "./src/components";
const Root = (props) => (
  <Block>
    <StatusBar barStyle="light-content" />
    <Clippy />
  </Block>

)
export default Root;
