
import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Modal,
    Alert
} from "react-native";
import { Block, Text, Input, Button } from "../../../../../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from "../../../../../constants";
import { fontNames } from "../../../../../constants/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const mode = {
    CREATE_COLLECTION: "Create a collection",
    CREATE_ARTICLE: "Create a clip"
}
const PopUpModal = ({
    popupModal,
    setPopupModal,
    formMode,
    submitAction,
    collection,
    setCollection,
    article,
    setArticle
}) => {
    const [errors, setError] = useState([])
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const collections = useSelector(state => state.collection.collections)
    const [items, setItems] = useState(collections.map((collection, index) => {
        return {value: collection.id, label: collection.collection_name, key: index};
      }));

      useEffect(() => {
        setItems(collections.map((collection, index) => {
            return {value: collection.id, label: collection.collection_name, key: index};
          }))
          console.log(items)
      }, [collections])




    const submitForm = () => {
        const temp_errors = []
        const {collection_name} = collection
        if(formMode == "CREATE_COLLECTION"){
            if(collection_name == "")
                temp_errors.push('collection name')
        }
        if (temp_errors.length == 0) {
            submitAction()
        } else {
            Alert.alert('Message', `${temp_errors.join(',')} ${temp_errors.length == 1 ? 'is required field':'are required fields'}`)
        }

    }



    const _renderCreateCollection = () => (
        <Block flex={false}>
            <Block paddingSpace={[theme.sizes.padding1, theme.sizes.padding1, 0]} flex={false}>
                <Input inputContainerStyle={styles.inputContainer}
                onChangeText={(value)}
                    label={<Text>Collection name</Text>}
                    onChangeText={(value)=>setCollection({...collection, collection_name:value})}
                />
            </Block>
        </Block>
    )

    const _renderCreateClip = () => (
        <Block flex={false} paddingSpace={[theme.sizes.padding1, theme.sizes.padding1, 0]
        }
            style={{ zIndex: 1 }}
        >
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
            <Block flex={false}>
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
                        <Text semiBold white> {mode[formMode]}</Text>
                    </Block>

                    {formMode == "CREATE_COLLECTION" ? _renderCreateCollection() : _renderCreateClip()}

                    <Block marginSpace={[5, 0, 5, 0]} flex={false} style={{ zIndex: 0 }}>
                        <Block row space="evenly" flex={false}>
                            <Block >
                                <Button onPress={() => setPopupModal(false)} style={styles.cancelButtonContainer} color={theme.colors.white}>
                                    <Text center regular secondary>Cancel</Text>
                                </Button>
                            </Block>
                            <Block>
                                <Button style={styles.createButtonContainer} color={theme.colors.secondary}
                                onPress={()=>submitForm()}
                                >
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
        paddingHorizontal: theme.sizes.base1
    },
    cancelButtonContainer: {
        borderRadius: 1,
        borderWidth: 1,
        height: theme.sizes.h3 * 2,
        margin: theme.sizes.base1,
        borderColor: theme.colors.secondary
    },
    dropDownContainer: {
        borderRadius: 2,
        borderColor: "transparent",
        borderRadius: 1,
        backgroundColor: theme.colors.inputBackground,
        height: theme.sizes.padding2 * 10

    },
    dropDownText: {
        fontFamily: fontNames.regular,
        fontSize: theme.sizes.h4
    },
    createButtonContainer: {
        borderRadius: 1,
        borderWidth: 1,
        height: theme.sizes.h3 * 2,
        margin: theme.sizes.base1,
        borderColor: theme.colors.secondary
    }
});