import React, {useEffect, useState} from "react";
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from "react-redux";
import { toastDismissAll } from '../services/toast/actions'
const ToastMessage = (props) => {
    const dispatch = useDispatch()
    const toast = useSelector(state => state.toast)
    useEffect(() => {
        if (toast?.body){

        Toast.show({
          type: toast?.type,
          position: 'bottom',
          text1: toast?.title,
          text2: toast?.body,
        });
        dispatch(toastDismissAll())
    }
      }, [toast]);

    return (<Toast ref={(ref) => Toast.setRef(ref)} />)
}
export default ToastMessage;

