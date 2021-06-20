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
const Clippy = (props) => {
    const [splash, setSplash] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setSplash(false)
        },1000)


    }, [])
    return (
    <View style={styles.container}>


        {splash ? <Splash/>:<RootNavigator />}

    </View>
    )}
export default Clippy;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});