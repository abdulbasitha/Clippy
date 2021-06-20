import React, { Component, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { theme } from "../constants";

const Input = (props) => {
  const [toggleSecure, setToggleSecure] = useState(false)

  const renderLabel = () => {
    const { label, error } = props;

    return (
      <Block marginSpace={[0,0,theme.sizes.base1 * 0.5,0]} flex={false}>
        {label && (
          <Text regular gray2={!error} accent={error}>
            {label}
          </Text>
        ) }
      </Block>
    );
  }

  const renderToggle = () => {
    const { secure, rightLabel } = props;


    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={theme.colors.black}
            size={theme.sizes.font * 1.35}
            name={toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  const renderRight = () => {
    const { rightLabel, rightStyle, onRightPress } = props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }


  const { email, phone, password, number, secure, refField, error, style,inputContainerStyle, ...other } = props;


  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [

    styles.input,
    error && { borderColor: theme.colors.accent },
    inputContainerStyle,
  ];

  const inputType = email
    ? "email-address"
    : number
      ? "numeric"
      : phone
        ? "phone-pad"
        : "default";
  return (
    <Block flex={false} marginSpace={[theme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput

        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...other}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
}

export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: "500",
    color: theme.colors.black,
    height: theme.sizes.base * 3,
    fontFamily: theme.fontNames.regular,
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base * 1.5,
    right: theme.sizes.base
  }
});
