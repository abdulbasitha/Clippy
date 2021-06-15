import React from "react";
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block, Text } from "../../../components";
import { theme } from "../../../constants";
import { Collection } from "../Containers";
const Clips = ({ navigation }) => (
    <Block>
        <Block center middle margin={theme.sizes.padding * 4}>
            <Text center regular color={theme.colors.gray}>No clips! Start by creating a collection using the + button</Text>
        </Block>
        <Collection />
    </Block>
)
export default Clips;

const styles = StyleSheet.create({

});