
import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block, Text, FloatingButton, Modal } from "../../../../components";
import { BottomSheet } from "./layout";
import { theme } from "../../../../constants";
const AddCollection = (props) => {
    const [actionModal, setActionModal] = useState(true)
    return (
        <Block flex={false}>
            <SafeAreaView>
                <FloatingButton onPress={() => setActionModal(true)} />
            </SafeAreaView>
            <BottomSheet
                actionModal={actionModal}
                setActionModal={setActionModal} />
        </Block>
    )
}
export default AddCollection;




const styles = StyleSheet.create({

});