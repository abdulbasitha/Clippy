import React, { useEffect } from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Block, Text, Divider } from "../../../../components";
import { theme } from "../../../../constants";
import * as SCREEN_NAMES from "../../../../navigation/screen_names";
import { getLinkPreview, getPreviewFromContent } from 'link-preview-js';
const ArticlesView = () => {
    const navigation = useNavigation();
    useEffect(() => {
        getLinkPreview("https://medium.com/enappd/firebase-push-notifications-in-react-native-apps-d9f60726ce9c", {
            imagesPropertyType: "og",
            headers: {
                "user-agent": "googlebot",
                "Accept-Language": "fr-CA",
            }
        }).then(data => console.debug(data));

    }, [])
    const _renderCollectionItem = () => {
        return (
            <Block >
                <TouchableOpacity onPress={() => Linking.openURL('http://medium.com/ddddss')} activeOpacity={0.5}>
                    <>
                        <Block style={styles.container} flex={false}>
                            <Block flex={false} row e>
                                <Block flex={false} marginSpace={[0,theme.sizes.base1,0,0]}>
                                    <Image source={{ uri: "https://medium.com/favicon.ico" }} style={styles.urlIconContainer} />
                                </Block>
                                <Block flex={false} marginSpace={[0,theme.sizes.base3,0,0]}>
                                    <Text numberOfLines={1} regular black h3>Nullish coalescing in JavaScript - Medium fdfdf dfdf</Text>
                                </Block>
                            </Block>
                        </Block>
                        <Block flex={false}>
                            <Divider color={theme.colors.gray} style={styles.dividerContainer} />
                        </Block>
                    </>
                </TouchableOpacity >
            </Block>
        )
    }

    return (
        <Block >

            {_renderCollectionItem()}

        </Block>
    )
}
export default ArticlesView;

const styles = StyleSheet.create({
    container: {
        marginVertical: theme.sizes.padding4,
        marginHorizontal: theme.sizes.padding3,

    },
    dividerContainer: {

        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%"
    },
    urlIconContainer: {
        width: 24,
        height: 24
    }
});