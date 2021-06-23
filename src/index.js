import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Splash from "./screens/Splash";
import RootNavigator from './navigation'
import { theme } from "./constants";
import store from './services/store';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const persistedStore = persistStore(store)
const Clippy = (props) => {
    const [splash, setSplash] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setSplash(false)
        },1000)


    }, [])
    return (
    <View style={styles.container}>
        {splash ? <Splash/>:
         <Provider store={store}>
         <PersistGate persistor={persistedStore} loading={null}>
        <RootNavigator />
        </PersistGate>
        </Provider>
        }
    </View>
    )}
export default Clippy;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});