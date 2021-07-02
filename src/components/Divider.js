import React  from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

const  Divider =  (props)=> {

    const { color, style, ...other } = props;
    const dividerStyles = [
      styles.divider,
       style,
       color && styles[color],
      color && !styles[color] && { borderBottomColor: color },
      ];

    return (
      <Block
        color={color || theme.colors.gray2}
        style={dividerStyles}
        {...other}
      />
    );
  }
export default Divider;

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: theme.sizes.base * 2,
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  accent: { borderBottomColor: theme.colors.accent },
  primary: { borderBottomColor: theme.colors.primary },
  secondary: { borderBottomColor: theme.colors.secondary },
  tertiary: { borderBottomColor: theme.colors.tertiary },
  black: { borderBottomColor: theme.colors.black },
  white: { borderBottomColor: theme.colors.white },
  gray: { borderBottomColor: theme.colors.gray },
  gray2: { borderBottomColor: theme.colors.gray2 },
});
