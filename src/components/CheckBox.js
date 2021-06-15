import React,{ useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import CheckBox from '@react-native-community/checkbox';

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import CustomIcons from "./CustomIcon";
import { theme } from "../constants";

export default function CustomCheck(props){

    const [check, setCheck] = useState(false)

    return(
        <Block flex={1} row margin={props.checkMargin}>
            <TouchableOpacity
                activeOpacity={0.2}
                style={[styles.checker,
                    {
                        backgroundColor : check ? theme.colors.primary : theme.colors.white,
                        borderColor : props.checkBorderColor ? props.checkBorderColor : theme.colors.white

                    }]}
                onPress = { () => setCheck(!check)}

            >
                {
                    check ? <CustomIcons name="close-icon" size={10} color={theme.colors.white} /> : null
                }
            </TouchableOpacity>
            <Text  style={{paddingHorizontal : 8, color : props.labelColor}}>
                {props.label}
            </Text>

        </Block>


    )
}

const styles = StyleSheet.create({
    checker : {
        flex : 0,
        justifyContent : "center",
        alignItems : "center",
        height : 18,

        borderWidth :1,
        width : 18,
        borderRadius : 4
    }

})