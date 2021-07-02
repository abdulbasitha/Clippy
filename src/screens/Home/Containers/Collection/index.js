
import React, { useState, useEffect, useImperativeHandle } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, FloatingButton } from "../../../../components";
import { BottomSheet, PopUpModal } from "./layout";
import uuid from 'react-native-uuid';
import { addCollections, updateCollections } from '../../../../services/collection/actions'
import { addArticles, updateArticles } from '../../../../services/article/actions'


const AddCollection = ({}, ref) => {

    const initialCollection = {
        id: uuid.v4(),
        collection_name: "",
        timestamp: Date.now()
    }
    const initialArticle = {
        id: uuid.v4(),
        title: "",
        collection_id: "",
        url: "",
        photo_url: "",
        is_read: false,
        timestamp: Date.now()
    }

    const dispatch = useDispatch()

    const collections = useSelector(state => state.collection.collections)
    const articles = useSelector(state => state.article.articles)
    const toast = useSelector(state => state.toast)

    const [popupOptionModal, setOptionModal] = useState(false)
    const [popupFormModal, setPopupFormModal] = useState(false)
    const [formMode, setFormMode] = useState(null)
    const [collection, setCollection] = useState(initialCollection)
    const [article, setArticle] = useState(initialArticle)

    useImperativeHandle(ref, () => ({
        updateButtonHandler(data) {
            _updateCollectionButtonHandler(data)
        },
        updateArticleEditHandler(data) {
            _updateClipHandler(data)
        }
    }), [])

    useEffect(() => {
        setPopupFormModal(false)
    }, [collections, articles])

    useEffect(() => {
        if (toast?.type == "success") {
            setCollection({ ...initialCollection, id: uuid.v4() })
            setArticle({ ...initialArticle, id: uuid.v4() })
        }
    }, [toast])


    const _createCollectionButtonHandler = () => {
        setFormMode('CREATE_COLLECTION')
        setOptionModal(false)
        setPopupFormModal(true)
    }

    const _updateCollectionButtonHandler = (data) => {
        setCollection({
            id: data?.id,
            collection_name: data?.collection_name,
            timestamp: Date.now()
        })
        setFormMode('UPDATE_COLLECTION')
        setOptionModal(false)
        setPopupFormModal(true)
    }


    const _createClipButtonHandler = () => {
        setFormMode('CREATE_ARTICLE')
        setOptionModal(false)
        setPopupFormModal(true)
    }

    const _updateClipHandler = (data) => {
        setArticle({
            id: data?.id,
            title: data?.title,
            collection_id: data?.collection_id,
            url: data?.url,
            photo_url: data?.photo_url,
            is_read: data?.is_read,
            timestamp: Date.now()
        })
        setFormMode('UPDATE_ARTICLE')
        setOptionModal(false)
        setPopupFormModal(true)
    }

    const _formSubmissionHandler = () => {
        if (formMode == "CREATE_COLLECTION")
            dispatch(addCollections(collection))
        else if (formMode == "UPDATE_COLLECTION")
            dispatch(updateCollections(collection))
        else if (formMode == "CREATE_ARTICLE")
            dispatch(addArticles(article))
        else if (formMode == "UPDATE_ARTICLE")
            dispatch(updateArticles(article))

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
export default React.forwardRef(AddCollection);
