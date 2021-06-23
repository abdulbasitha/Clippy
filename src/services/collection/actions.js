
import { ADD_COLLECTIONS, UPDATE_COLLECTIONS, DELETE_COLLECTIONS } from './actionTypes'


export const addCollections = (data) => dispatch=>{
    dispatch({ type: ADD_COLLECTIONS, payload:data })
}
export const updateCollections = (data) => dispatch => {
    dispatch({ type: UPDATE_COLLECTIONS, payload:data })
}

export const deleteCollections = (data) => dispatch => {
    dispatch({ type: DELETE_COLLECTIONS, payload:data })
}
