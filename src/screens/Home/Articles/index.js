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
const Articles = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => headerRight1()
        })
    }, [navigation])
    const headerRight1 = () => {
        return (
            <Block row center marginSpace={[theme.sizes.base]}>
                <Block marginSpace={[0, theme.sizes.base, 0, 0]}>
                    <TouchableOpacity >
                        <Icon name="edit-line" size={theme.sizes.base3} color={theme.colors.white}></Icon>
                    </TouchableOpacity>
                </Block>
                <Block>
                    <TouchableOpacity >
                        <Icon name="delete-bin-4-line" size={theme.sizes.base3} color={theme.colors.white}></Icon>
                    </TouchableOpacity>
                </Block>
            </Block>
        )
    }

    return (
        <Block marginSpace={[10, 100, 10, 10]}>
            <View style={styles.container}>
                <Text>Articles</Text>
            </View>
        </Block>
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