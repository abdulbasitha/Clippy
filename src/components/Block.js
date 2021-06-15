import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

import { theme } from "../constants";

  const Block = (props)=> {
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
    const { padding } = props;
    if (typeof padding === "number") {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === "object") {
      const paddingSize = Object.keys(padding).length;
      switch (paddingSize) {
        case 1:
          return {
            paddingTop: padding[0],
            paddingRight: padding[0],
            paddingBottom: padding[0],
            paddingLeft: padding[0]
          };
        case 2:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            paddingLeft: padding[1]
          };
        case 3:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[1]
          };
        default:
          return {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          };
      }
    }
  }


    const {
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
      padding,
      marginSpace,
      animated,
      wrap,
      style,
      children,

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
      padding && { ...handlePaddings() },
      card && styles.card,
      shadow && styles.shadow,
      space && { justifyContent: `space-${space}` },
      wrap && { flexWrap: "wrap" },
      color && styles[color],
      color && !styles[color] && { backgroundColor: color },
      // style
    ];

    if (animated) {
      return (
        <Animated.View style={blockStyles} {...props}>
          {children}
        </Animated.View>
      );
    }

    return (
      <View style={blockStyles} {...props}>
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
