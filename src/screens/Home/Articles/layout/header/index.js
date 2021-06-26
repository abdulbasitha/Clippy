import React, { useEffect, useLayoutEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import { Block } from "../../../../../components";
import { theme } from "../../../../../constants";
import Icon from 'react-native-remix-icon';
import { useNavigation } from '@react-navigation/native';
const Header = ({editAction, deleteAction}) =>
{
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => headerRight()
        })
    }, [navigation])
    const headerRight = () => {
        const deleteConfirmation = ()=> {
            Alert.alert(
                'Message',
                'Are you sure?',
                [
                    { text: 'NO', onPress: () => null, style: 'cancel' },
                    { text: 'YES', onPress: () => deleteAction() },
                ]
            );
        }
        return (
            <Block row center marginSpace={[theme.sizes.base]}>
                <Block marginSpace={[0, theme.sizes.base, 0, 0]}>
                    <TouchableOpacity onPress={editAction}>
                        <Icon name="edit-line" size={theme.sizes.base3} color={theme.colors.white}></Icon>
                    </TouchableOpacity>
                </Block>
                <Block>
                    <TouchableOpacity onPress={()=> deleteConfirmation()}>
                        <Icon name="delete-bin-4-line" size={theme.sizes.base3} color={theme.colors.white}></Icon>
                    </TouchableOpacity>
                </Block>
            </Block>
        )
    }
    return null
}
export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});