
import { ADD_COLLECTIONS, UPDATE_COLLECTIONS, DELETE_COLLECTIONS } from './actionTypes'
import  {DELETE_ARTICLE_COLLECTION} from '../article/actionTypes'
import {toastLoading, toastSuccess, toastWarning} from '../toast/actions'
export const addCollections = (data) => dispatch=>{
    dispatch(toastLoading({loading:true}))
    dispatch({ type: ADD_COLLECTIONS, payload:data })
    dispatch(toastSuccess({title:'Success', body: 'Record added successfully'}))
    dispatch(toastLoading({loading:false}))
}
export const updateCollections = (data) => dispatch => {
    dispatch(toastLoading({loading:true}))
    dispatch({ type: UPDATE_COLLECTIONS, payload:data })
    dispatch(toastSuccess({title:'Success', body: 'Record updated successfully'}))
    dispatch(toastLoading({loading:false}))
}

export const deleteCollections = (data) => dispatch => {
    dispatch({ type: DELETE_ARTICLE_COLLECTION, payload:data })
    dispatch({ type: DELETE_COLLECTIONS, payload:data })
    dispatch(toastWarning({title:'Success', body: 'Record removed successfully'}))
}
