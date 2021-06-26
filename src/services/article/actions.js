
import { ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from './actionTypes'
import { getLinkPreview } from 'link-preview-js';
import { toastLoading, toastSuccess, toastWarning } from '../toast/actions'
import { Alert } from 'react-native';


export const addArticles = (data) => dispatch => {
    dispatch(toastLoading({ loading: true }))
    getMetaData(data?.url).then(value => {
        dispatch({
            type: ADD_ARTICLE,
            payload: {
                ...data,
                title: value?.title,
                photo_url: value?.favicons[0]
            }
        })
        dispatch(toastSuccess({ title: 'Success', body: 'Record added successfully' }))
        dispatch(toastLoading({ loading: false }))
    }).catch(e => {
        Alert.alert("Message", "Invalid URL")
        dispatch(toastLoading({ loading: false }))
    })

}
export const updateArticles = (data) => dispatch => {
    dispatch(toastLoading({ loading: true }))
    getMetaData(data?.url).then(value => {
        dispatch({
            type: UPDATE_ARTICLE,
            payload: {
                ...data,
                title: value?.title,
                photo_url: value?.favicons[0]
            }
        })
        dispatch(toastSuccess({ title: 'Success', body: 'Record updated successfully' }))
    }).catch(e => {
        Alert.alert("Message", "Invalid URL")
        dispatch(toastLoading({ loading: false }))
    })
}

export const deleteArticles = (data) => dispatch => {

    dispatch({ type: DELETE_ARTICLE, payload: data })
    dispatch(toastWarning({ title: 'Success', body: 'Record removed successfully' }))
}

export const getMetaData = (url) => {
    return getLinkPreview(url, {
        imagesPropertyType: "og",
        headers: {
            "user-agent": "googlebot",
            "Accept-Language": "fr-CA",
        }
    })
}
