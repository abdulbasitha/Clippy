import React from "react";
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block, Text } from "../../../components";
import { theme } from "../../../constants";
import { Collection } from "../Containers";
import { EmptyView } from "./layout";
const Clips = ({ navigation }) => {




return (
    <Block >
        <EmptyView/>
        <Collection />
    </Block>
)}
export default Clips;

const styles = StyleSheet.create({
    modelActive:{

    }
});