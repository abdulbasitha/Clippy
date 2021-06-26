
import React, { useState } from "react";
import {
    StyleSheet,
    Alert,
    ActivityIndicator
} from "react-native";
import Modal from 'react-native-modal';
import { Block, Text, Input, Button } from "../../../../../components";
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from "../../../../../constants";
import { fontNames } from "../../../../../constants/theme";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRoute } from '@react-navigation/native';
const mode = {
    CREATE_COLLECTION: "Create a collection",
    CREATE_ARTICLE: "Create a clip",
    UPDATE_COLLECTION: "Update Collection",
    UPDATE_ARTICLE: "Update Article"
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

    const route = useRoute();
    const [open, setOpen] = useState(false);
    const [collection_id, setCollection_id] = useState(null);

    const collections = useSelector(state => state.collection.collections)
    const articles = useSelector(state => state.article)
    const loading = useSelector(state => state.toast.loading)

    const [items, setItems] = useState(collections?.map((collection, index) => {
        return { value: collection.id, label: collection.collection_name, key: index };
    }));

    useEffect(() => {
        setItems(collections?.map((collection, index) => {
            return { value: collection.id, label: collection.collection_name, key: index };
        }))
    }, [collections])

    useEffect(() => {
        setArticle({ ...article, collection_id: collection_id })
    }, [collection_id])

    useEffect(() => {
        setCollection_id(route.params?.collection_id)
        setArticle({ ...article, collection_id: route.params?.collection_id })
    }, [route.params?.collection_id, articles])

    useEffect(() => {
        if (!article.collection_id && route.params?.collection_id) {
            setArticle({ ...article, collection_id: route.params?.collection_id })
        }
    }, [article])

    const submitForm = () => {

        const temp_errors = []
        const { collection_name } = collection
        const { url } = article
        if ((formMode == "CREATE_COLLECTION" || formMode == "UPDATE_COLLECTION")) {
            if (!collection_name)
                temp_errors.push('collection name')
        } else if (formMode == "CREATE_ARTICLE") {
            if (!collection_id)
                temp_errors.push('collection')
            if (!url)
                temp_errors.push('URL')
        }
        if (temp_errors.length == 0) {
            submitAction()
        } else {
            Alert.alert('Message', `${temp_errors.join(',')} ${temp_errors.length == 1 ? 'is required field' : 'are required fields'}`)
        }
    }



    const _renderCreateCollection = () => (
        <Block flex={false}>
            <Block paddingSpace={[theme.sizes.padding1, theme.sizes.padding1, 0]} flex={false}>
                <Input inputContainerStyle={styles.inputContainer}
                    label={<Text>Collection name</Text>}
                    onChangeText={(value) => setCollection({ ...collection, collection_name: value })}
                    value={collection.collection_name}
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
                value={collection_id}
                items={items}
                setOpen={setOpen}
                setValue={setCollection_id}

            />
            <Block flex={false}>
                <Input inputContainerStyle={styles.inputContainer}
                    label={<Text>URL</Text>}
                    onChangeText={(value) => setArticle({ ...article, url: value })}
                    value={article.url}
                />
            </Block>
        </Block>
    )
    return (
        <Block >
            <Modal
                deviceHeight={theme.sizes.height + theme.sizes.padding * 2}
                deviceWidth={theme.sizes.width}
                style={styles.modalContent}
                backdropColor={'rgba(0,0,0,0.2)'}
                animationIn={'slideInUp'} transparent={true} isVisible={popupModal}
            >
                <Block center middle flex={1} style={{

                }}>
                    <Block style={styles.modalContainer} flex={false}  >
                        <Block flex={false} center color={theme.colors.primary} paddingSpace={10}>
                            <Text semiBold white> {mode[formMode]}</Text>
                        </Block>

                        {(formMode == "CREATE_COLLECTION" || formMode == "UPDATE_COLLECTION") && _renderCreateCollection()}
                        {(formMode == "CREATE_ARTICLE" || formMode == "UPDATE_ARTICLE") && _renderCreateClip()}

                        <Block marginSpace={[5, 0, 5, 0]} flex={false} style={{ zIndex: 0 }}>
                            <Block row space="evenly" flex={false}>
                                <Block >
                                    <Button onPress={() => setPopupModal(false)} style={styles.cancelButtonContainer} color={theme.colors.white}>
                                        <Text center regular secondary>Cancel</Text>
                                    </Button>
                                </Block>
                                <Block>

                                    <Button style={styles.createButtonContainer} color={theme.colors.secondary}
                                        disabled={loading}
                                        onPress={() => submitForm()}
                                    >
                                        {loading ? <ActivityIndicator size="small" color={theme.colors.white} /> : <Text center regular white style={styles.capitalize}>{formMode?.split('_')[0]}</Text>}
                                    </Button>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Modal>
        </Block>


    )
}
export default PopUpModal;

const styles = StyleSheet.create({
    modalContent: {
        margin: 0
    },
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
    },
    capitalize: {
        textTransform: 'capitalize'
    }
});