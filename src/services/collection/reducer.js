import { ADD_COLLECTIONS, UPDATE_COLLECTIONS, DELETE_COLLECTIONS } from './actionTypes'

const initialState = {
    collections:[]
}
export default function (state = initialState, actions) {
    switch (actions.type) {
        case ADD_COLLECTIONS:
            return {
                ...state,
                collections:[...state.collections,actions.payload]
            }
        default: return state;
    }
}