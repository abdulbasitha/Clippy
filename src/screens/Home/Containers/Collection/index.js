
import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Block, Text, FloatingButton, Modal } from "../../../../components";
import { BottomSheet, PopUpModal } from "./layout";
import { theme } from "../../../../constants";
const AddCollection = (props) => {
    const [actionModal, setActionModal] = useState(false)
    const [popupModal, setPopupModal] = useState(false)

    return (
        <Block flex={false} >
            <PopUpModal
                popupModal={popupModal}
                setPopupModal={setPopupModal}
            />
            <SafeAreaView>
                <FloatingButton onPress={() => setPopupModal(true)} />
            </SafeAreaView>
            <BottomSheet
                actionModal={actionModal}
                setActionModal={setActionModal}
            />
        </Block>
    )
}
export default AddCollection;


const styles = StyleSheet.create({

});