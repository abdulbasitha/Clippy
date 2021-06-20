
import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Modal
} from "react-native";
import { Block, Text, Input, Button } from "../../../../../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from "../../../../../constants";
import { fontNames } from "../../../../../constants/theme";
const PopUpModal = ({ popupModal, setPopupModal }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);


    const _renderCreateCollection = () => (
        <Block flex={false}>
            <Block paddingSpace={[theme.sizes.padding1, theme.sizes.padding1, 0]} flex={false}>
                <Input inputContainerStyle={styles.inputContainer}
                    label={<Text>Collection name</Text>}
                />
            </Block>
        </Block>
    )

    const _renderCreateClip = () => (
        <Block flex={false} paddingSpace={[theme.sizes.padding1, theme.sizes.padding1, 0]}>

            <Block flex={false} marginSpace={[0, 0, theme.sizes.base1 * 0.5, 0]}>
                <Text regular>Collection</Text>
            </Block>

            <DropDownPicker
                style={[styles.inputContainer]}
                dropDownContainerStyle={styles.dropDownContainer}
                textStyle={styles.dropDownText}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />

            <Block  flex={false}>
                <Input inputContainerStyle={styles.inputContainer}
                    label={<Text>URL</Text>}
                />
            </Block>
        </Block>
    )


    return (
        <Modal animationType={'slide'} transparent={true} visible={popupModal}
        >
            <Block center middle flex={1}>
                <Block style={styles.modalContainer} flex={false} >
                    <Block flex={false} center color={theme.colors.primary} paddingSpace={10}>
                        <Text semiBold white> Create a collection</Text>
                    </Block>

                    {/* {_renderCreateCollection()} */}
                    {_renderCreateClip()}

                    <Block marginSpace={[5, 0, 5, 0]} flex={false}>
                        <Block row space="evenly" flex={false}>
                            <Block >
                                <Button onPress={() => setPopupModal(false)} style={styles.cancelButtonContainer} color={theme.colors.white}>
                                    <Text center regular secondary>Cancel</Text>
                                </Button>
                            </Block>
                            <Block>
                                <Button  style={styles.createButtonContainer} color={theme.colors.secondary}>
                                    <Text center regular white>Create</Text>
                                </Button>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Modal>

    )
}
export default PopUpModal;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: theme.colors.white,
        width: theme.sizes.width - theme.sizes.base4,


    },
    inputLabel: {
        padding: 20
    },
    inputContainer: {
        height: theme.sizes.base3 * 2,
        borderColor: "transparent",
        borderRadius: 1,
        backgroundColor: theme.colors.inputBackground,
        paddingHorizontal: 10
    },
    cancelButtonContainer: {
        borderRadius: 1,
        borderWidth: 1,
        height: 35,
        margin: 10,
        borderColor: theme.colors.secondary
    },
    dropDownContainer: {
        borderRadius: 2,
        borderColor: "transparent",
        borderRadius: 1,
        backgroundColor: theme.colors.inputBackground,
    },
    dropDownText:{
        fontFamily:fontNames.regular,
        fontSize:14
    },
    createButtonContainer: {
        borderRadius: 1,
        borderWidth: 1,
        height: 35,
        margin: 10,
        borderColor: theme.colors.secondary
    }
});