import { ADD_ARTICLE, UPDATE_ARTICLE, DELETE_ARTICLE } from './actionTypes'

const initialState = {
    articles:[]
}
export default function (state = initialState, actions) {
    switch (actions.type) {

        case ADD_ARTICLE:
            return {
                ...state,
                articles:actions.payload
            }

        default: return state;
    }
}