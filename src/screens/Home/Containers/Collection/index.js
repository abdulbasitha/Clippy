
import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text, FloatingButton, Modal } from "../../../../components";
import { BottomSheet, PopUpModal } from "./layout";
import { theme } from "../../../../constants";
import uuid from 'react-native-uuid';
import { addCollections } from '../../../../services/collection/actions'

const initialCollection = {
    id: uuid.v4(),
    collection_name: "",
    timestamp: Date.now()
}
const initialArticle = {
    id: uuid.v4(),
    collection_id: "",
    url: "",
    timestamp: Date.now()
}


const AddCollection = (props) => {
    const dispatch = useDispatch()
    const collections = useSelector(state => state.collection.collections)
    const [popupOptionModal, setOptionModal] = useState(false)
    const [popupFormModal, setPopupFormModal] = useState(false)
    const [formMode, setFormMode] = useState(null)
    const [collection, setCollection] = useState(initialCollection)
    const [article, setArticle] = useState(initialArticle)




    const _createCollectionButtonHandler = () => {
        setFormMode('CREATE_COLLECTION')
        setOptionModal(false)
        setPopupFormModal(true)
    }

    const _createClipButtonHandler = () => {
        setFormMode('CREATE_ARTICLE')
        setOptionModal(false)
        setPopupFormModal(true)

    }
    const _formSubmissionHandler = () => {
        setPopupFormModal(false)

        dispatch(addCollections(collection))
        setCollection({ ...initialCollection, id: uuid.v4() })
        setArticle({ ...initialArticle,   id: uuid.v4() })
    }
    return (
        <Block flex={false} >
            <PopUpModal
                popupModal={popupFormModal}
                setPopupModal={setPopupFormModal}
                formMode={formMode}
                submitAction={_formSubmissionHandler}
                collection={collection}
                setCollection={setCollection}
                article={article}
                setArticle={setArticle}
            />
            <SafeAreaView>
                <FloatingButton onPress={() => collections?.length ? setOptionModal(true) : _createCollectionButtonHandler()} />
            </SafeAreaView>
            <BottomSheet
                actionModal={popupOptionModal}
                setActionModal={setOptionModal}
                clipAction={_createClipButtonHandler}
                collectionAction={_createCollectionButtonHandler}
            />
        </Block>
    )
}
export default AddCollection;


const styles = StyleSheet.create({

});