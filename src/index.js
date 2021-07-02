import React, { useEffect } from "react";

import RootNavigator from './navigation'
import store from './services/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Block, Toast } from "./components";
import RNBootSplash from "react-native-bootsplash";
const persistedStore = persistStore(store)
const Clippy = () => {

    useEffect(() => {
        RNBootSplash.show();
        setTimeout(() => {
            RNBootSplash.hide();
        }, 1000)
    }, [])
    return (
        <Block >
                <Provider store={store}>
                    <PersistGate persistor={persistedStore} >
                        <RootNavigator />
                        <Toast />
                    </PersistGate>
                </Provider>

        </Block>
    )
}
export default Clippy;
