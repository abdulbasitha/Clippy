import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Linking,
    Alert
} from "react-native";
import { theme } from "../../../../constants";
import { Block, Text, FloatingButton, Modal } from "../../../../components";
const BottomSheet = ({data, actionModal, setActionModal, articleEditAction,  articleDeleteAction,  articleMarkAction}) => {

    const deleteConfirmation = (data)=> {
        Alert.alert(
            'Message',
            'Are you sure?',
            [
                { text: 'NO', onPress: () => null, style: 'cancel' },
                { text: 'YES', onPress: () => articleDeleteAction(data) },
            ]
        );
    }
    return (

        <Modal
            customContainerStyle={styles.modalContainer}
            visible={actionModal}
            onDismiss={() => setActionModal(false)}
        >
            <Block center middle padding={20}>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}
                    onPress={()=>Linking.openURL(data?.url)}
                    >
                        <Text secondary regular>Open in browser</Text>
                    </TouchableOpacity>
                </Block>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}
                         onPress={()=> articleMarkAction(data)}
                    >
                        <Text regular black> {data?.is_read ? "Mark as unread":"Mark as read"}</Text>
                    </TouchableOpacity>
                </Block>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}
                         onPress={()=>articleEditAction(data)}
                    >
                        <Text regular black>Edit</Text>
                    </TouchableOpacity>
                </Block>
                <Block center>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={hitSlop}
                         onPress={()=>deleteConfirmation(data)}
                    >
                        <Text regular black>Delete</Text>
                    </TouchableOpacity>
                </Block>
            </Block>
        </Modal>

    )
}
export default BottomSheet;
const hitSlop = {
    top: theme.sizes.padding1,
    bottom: theme.sizes.padding1,
    left: theme.sizes.padding1,
    right: theme.sizes.padding1
}
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        paddingTop: theme.sizes.padding2,
        paddingHorizontal: theme.sizes.padding2,
        minHeight: "25%",
    }
});