import React from "react";
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block, Text, Button } from "../../../components";
import { theme } from "../../../constants";
import { Collection } from "../Containers";
import { EmptyView, CollectionsView } from "./layout";
import { useDispatch, useSelector } from "react-redux";
const Clips = ({ navigation }) => {
    const collections = useSelector(state => state.collection.collections)
    return (
        <Block >
           <CollectionsView data={collections} />
            <Collection />
        </Block>
    )
}
export default Clips;

const styles = StyleSheet.create({
    modelActive: {

    }
});