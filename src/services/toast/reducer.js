import { TOAST_SUCCESS_MESSAGE, TOAST_WARNING_MESSAGE, TOAST_ERROR_MESSAGE, TOAST_DISMISS_ALL, TOAST_LOADING } from './actionTypes'

const initialState = {
    timestamp: Date.now(),
    loading: false,
    type: '',
    title: '',
    body: '',
}
export default function (state = initialState, actions) {
    switch (actions.type) {
        case TOAST_SUCCESS_MESSAGE:
            return {
                ...state,
                type: 'success',
                loading: false,
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_ERROR_MESSAGE:
            return {
                ...state,
                type: 'error',
                loading: false,
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_WARNING_MESSAGE:
            return {
                ...state,
                type: 'info',
                loading: false,
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_LOADING:
            return {
                ...state,
                loading: actions.payload.loading
            }
        case TOAST_DISMISS_ALL:
            return {
                ...state,
                loading: false,
                type: '',
                title: '',
                body: '',
            }
        default: return state;
    }
}