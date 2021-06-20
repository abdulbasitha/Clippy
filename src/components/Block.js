import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

import { theme } from "../constants";

  const Block = (props)=> {
    const extraProps = props
  const handleMargins = () => {
    const { marginSpace } = props;
    if (typeof marginSpace === "number") {
      return {
        marginTop: marginSpace,
        marginRight: marginSpace,
        marginBottom: marginSpace,
        marginLeft: marginSpace
      };
    }

    if (typeof marginSpace === "object") {
      const marginSize = Object.keys(marginSpace).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: marginSpace[0],
            marginRight: marginSpace[0],
            marginBottom: marginSpace[0],
            marginLeft: marginSpace[0]
          };
        case 2:
          return {
            marginTop: marginSpace[0],
            marginRight: marginSpace[1],
            marginBottom: marginSpace[0],
            marginLeft: marginSpace[1]
          };
        case 3:
          return {
            marginTop: marginSpace[0],
            marginRight: marginSpace[1],
            marginBottom: marginSpace[2],
            marginLeft: marginSpace[1]
          };
        default:
          return {
            marginTop: marginSpace[0],
            marginRight: marginSpace[1],
            marginBottom: marginSpace[2],
            marginLeft: marginSpace[3]
          };
      }
    }
  }
  const handlePaddings = () => {
    const { paddingSpace } = props;
    if (typeof paddingSpace === "number") {
      return {
        paddingTop: paddingSpace,
        paddingRight: paddingSpace,
        paddingBottom: paddingSpace,
        paddingLeft: paddingSpace
      };
    }
    if (typeof paddingSpace === "object") {
      const paddingSize = Object.keys(paddingSpace).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: paddingSpace[0],
            paddingRight: paddingSpace[0],
            paddingBottom: paddingSpace[0],
            paddingLeft: paddingSpace[0]
          };
        case 2:
          return {
            paddingTop: paddingSpace[0],
            paddingRight: paddingSpace[1],
            paddingBottom: paddingSpace[0],
            paddingLeft: paddingSpace[1]
          };
        case 3:
          return {
            paddingTop: paddingSpace[0],
            paddingRight: paddingSpace[1],
            paddingBottom: paddingSpace[2],
            paddingLeft: paddingSpace[1]
          };
        default:
          return {
            paddingTop: paddingSpace[0],
            paddingRight: paddingSpace[1],
            paddingBottom: paddingSpace[2],
            paddingLeft: paddingSpace[3]
          };
      }
    }
  }


    let {
      flex,
      row,
      column,
      center,
      middle,
      left,
      right,
      top,
      bottom,
      card,
      shadow,
      color,
      space,
      paddingSpace,
      marginSpace,
      animated,
      wrap,
      style,
      children,
      ...other
    } = props;

    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 }, // reset / disable flex
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      left && styles.left,
      right && styles.right,
      top && styles.top,
      bottom && styles.bottom,
      marginSpace && { ...handleMargins() },
      paddingSpace && { ...handlePaddings() },
      card && styles.card,
      shadow && styles.shadow,
      space && { justifyContent: `space-${space}` },
      wrap && { flexWrap: "wrap" },
      color && styles[color],
      color && !styles[color] && { backgroundColor: color },
      style,
    ];

  

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...other}>
          {children}
        </Animated.View>
      );
    }

    return (
      <View style={blockStyles} {...other}>
        {children}
      </View>
    );
  }

export default Block;

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: theme.sizes.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 }
});
