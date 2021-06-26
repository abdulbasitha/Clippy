import React from "react";

import { Block } from "../../../components";

import { Collection } from "../Containers";
import { CollectionsView } from "./layout";
import { useSelector } from "react-redux";
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
