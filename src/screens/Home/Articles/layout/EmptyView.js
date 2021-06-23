import React from "react";
import {
    View,

    StyleSheet
} from "react-native";
import { Block, Text } from "../../../../components";
import { theme } from "../../../../constants";
const EmptyView = (props) => (
    <Block center middle marginSpace={theme.sizes.padding * 4}>
        <Text center regular color={theme.colors.gray}>No clips! Start by creating a collection using the + button</Text>
    </Block>
)
export default EmptyView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});