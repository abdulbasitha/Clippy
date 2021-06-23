import { TOAST_SUCCESS_MESSAGE, TOAST_WARNING_MESSAGE, TOAST_ERROR_MESSAGE, TOAST_DISMISS_ALL } from './actionTypes'

const initialState = {
    timestamp: Date.now(),
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
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_ERROR_MESSAGE:
            return {
                ...state,
                type: 'error',
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_WARNING_MESSAGE:
            return {
                ...state,
                type: 'info',
                title: actions.payload.title,
                body: actions.payload.body
            }
        case TOAST_DISMISS_ALL:
            return {
                ...state,
                type: '',
                title: '',
                body: '',
            }
        default: return state;
    }
}