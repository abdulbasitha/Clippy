import React, { useEffect, useLayoutEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block } from "../../../components";
import { theme } from "../../../constants";
import Icon from 'react-native-remix-icon';
import {Header,  ArticlesView, EmptyView} from './layout'
import { Collection } from "../Containers";
const Articles = () => {



    return (
        <>
        <Header/>
        <Block >
        {/* <EmptyView/> */}
        <ArticlesView/>
        <Collection />
    </Block>
    </>
    )
}
export default Articles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});