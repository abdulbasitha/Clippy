import React, { useState, useEffect } from "react";
import Splash from "./screens/Splash";
import RootNavigator from './navigation'
import store from './services/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Block, Toast } from "./components";
const persistedStore = persistStore(store)
const Clippy = (props) => {
    const [load, setLoad] = useState({
        splash: true,
        persist: true
    })
    useEffect(() => {
        setTimeout(() => {
            setLoad({ ...load, splash: false })
        }, 1000)
    }, [])
    return (
        <Block >
            {load.splash ? <Splash /> :
                <Provider store={store}>
                    <PersistGate persistor={persistedStore} loading={<Splash />}>
                        <RootNavigator />
                        <Toast />
                    </PersistGate>
                </Provider>
            }
        </Block>
    )
}
export default Clippy;

