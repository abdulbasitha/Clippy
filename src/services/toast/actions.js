import {TOAST_SUCCESS_MESSAGE, TOAST_WARNING_MESSAGE, TOAST_ERROR_MESSAGE, TOAST_DISMISS_ALL, TOAST_LOADING } from './actionTypes';

export const toastSuccess = (data) => dispatch=>{
    dispatch({ type: TOAST_SUCCESS_MESSAGE, payload:data})
}
export const toastError = (data) => dispatch=>{
    dispatch({ type: TOAST_ERROR_MESSAGE, payload:data})
}
export const toastDismissAll = (data) => dispatch=>{
    dispatch({ type: TOAST_DISMISS_ALL, payload:data})
}

export const toastWarning = (data) => dispatch=>{
    dispatch({ type: TOAST_WARNING_MESSAGE, payload:data})
}

export const toastLoading = (data) => dispatch=>{
    dispatch({ type: TOAST_LOADING, payload:data})
}