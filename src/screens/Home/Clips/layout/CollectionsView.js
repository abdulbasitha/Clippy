import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

const CollectionsView = (props) => (
    <View style={styles.container}>
        <Text>CollectionsView</Text>
    </View>
    )
export default CollectionsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});