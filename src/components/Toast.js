import React, {useEffect} from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Toast from 'react-native-toast-message';

const ToastMessage = (props) => {
    useEffect(() => {
        if (toast?.body){
        Toast.show({
          type: toast?.type,
          position: 'bottom',
          text1: toast?.title,
          text2: toast?.body,
        });

    }
      }, [toast]);

    return  (<Toast ref={(ref) => Toast.setRef(ref)} />)
}
export default ToastMessage;

