
import { ADD_COLLECTIONS, UPDATE_COLLECTIONS, DELETE_COLLECTIONS } from './actionTypes'

const initialState = {
    collections: []
}
export default function (state = initialState, actions) {

    switch (actions.type) {
        case ADD_COLLECTIONS:
            return {
                ...state,
                collections: [...state.collections, actions.payload]
            }

        case UPDATE_COLLECTIONS:
            const { collection_name } = actions.payload;
            const index = state.collections.findIndex(item => item.id == actions.payload.id);
            const newArray = [...state.collections];
            newArray[index].collection_name = collection_name

            return {
                ...state,
                collections: newArray,
            }

        case DELETE_COLLECTIONS:
            return {
                ...state,
                collections: state.collections.filter(item => item.id != actions?.payload?.id)
            }

        default: return state;
    }
}