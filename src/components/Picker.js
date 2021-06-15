import React,{ useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import CustomIcons from "./CustomIcon";
import { theme } from "../constants";
import {Picker} from '@react-native-community/picker';


export default function CustomPicker(props){

    const [check, setCheck] = useState(false)
    const { label, error, items } = props;


    const renderLabel = () => {
        return (
          <Block flex={false}>
            {label ? (
              <Text gray2={!error} accent={error}>
                {label}
              </Text>
            ) : null}
          </Block>
        );
      }


    return(
        <Block flex={false} margin={[theme.sizes.base, 0]}>
            {renderLabel()}
            <Picker
                itemStyle = {{color : theme.colors.cooling}}
                style={{color : theme.colors.white, borderColor : "red", borderWidth :1}}
                {...props}
            >
                {
                    items ?
                        items.map((val,index) =>
                            <Picker.Item label={val.name} value={val.id} key={index} />
                        )
                    : null
                }

            </Picker>
        </Block>


    )
}

const styles = StyleSheet.create({


})