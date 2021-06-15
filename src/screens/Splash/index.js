import React, { Component } from "react";
import {
    View,
    StyleSheet
} from "react-native";
import {Block, Text} from '../../components'
import { theme } from "../../constants";
const  Splash = () => {

        return (
            <Block center middle color={theme.colors.primary}>
                <Text size={theme.sizes.h4 * 2} white semiBold> Clippy </Text>
            </Block>
        );
    }

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});