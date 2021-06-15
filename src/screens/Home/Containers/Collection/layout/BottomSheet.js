import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { theme } from "../../../../../constants";
import { Block, Text, FloatingButton, Modal } from "../../../../../components";
const BottomSheet = ({actionModal, setActionModal}) => {
    return (

        <Modal
            customContainerStyle={styles.modalContainer}
            visible={actionModal}
            onDismiss={() => setActionModal(false)}
        >
            <Block center middle padding={20}>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}>
                        <Text secondary regular>create a Clip</Text>
                    </TouchableOpacity>
                </Block>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}>
                        <Text regular black>Create a collection</Text>
                    </TouchableOpacity>
                </Block>
            </Block>
        </Modal>

    )
}
export default BottomSheet;
const hitSlop = {
    top: theme.sizes.padding3,
    bottom: theme.sizes.padding3,
    left: theme.sizes.padding3,
    right: theme.sizes.padding3
}
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        paddingTop: theme.sizes.padding2,
        paddingHorizontal: theme.sizes.padding2,
        minHeight: "18%",
    }
});