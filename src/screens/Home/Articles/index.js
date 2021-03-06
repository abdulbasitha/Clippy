import React, { useEffect, useRef, useState } from "react";

import { Block } from "../../../components";

import { Header, ArticlesView, BottomSheet } from './layout'
import { Collection } from "../Containers";
import { useNavigation, useRoute } from "@react-navigation/native";
import { deleteCollections, } from '../../../services/collection/actions'
import { useDispatch, useSelector } from "react-redux";
import { deleteArticles, updateArticles } from "../../../services/article/actions";
const Articles = () => {

    const childRef = useRef();
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [popupOptionModal, setOptionModal] = useState(false)
    const [active_article, setActive_article] = useState([])

    const collection = useSelector(state => state.collection.collections?.find(data => data.id == route?.params.collection_id))

    useEffect(() => {
        if (!collection)
            navigation.goBack()

    }, [collection])

    const _headerEditHandler = () => {
        childRef.current.updateButtonHandler(collection)
    }

    const _articleEditHandler = (data) => {
        childRef.current.updateArticleEditHandler(data)
        setOptionModal(false)
    }

    const _articleDeleteHandler = (data) => {
        dispatch(deleteArticles(data))
        setOptionModal(false)
    }

    const _articleMarkHandler = (data) => {
        data.is_read = !data.is_read
        dispatch(updateArticles(data))
        setOptionModal(false)
    }

    const _headerDeleteHandler = () => {
        dispatch(deleteCollections(collection))
    }

    const _onLongPressHandler = (data) => {
        setActive_article(data)
        setOptionModal(true)
    }

    return (
        <>
            <Header editAction={_headerEditHandler} deleteAction={_headerDeleteHandler} />
            <Block >
                <ArticlesView longPress={_onLongPressHandler} />
                <Collection ref={childRef} />
                <BottomSheet
                    articleMarkAction={_articleMarkHandler}
                    articleEditAction={_articleEditHandler}
                    articleDeleteAction={_articleDeleteHandler}
                    data={active_article}
                    actionModal={popupOptionModal}
                    setActionModal={setOptionModal}
                />

            </Block>
        </>
    )
}
export default Articles;
