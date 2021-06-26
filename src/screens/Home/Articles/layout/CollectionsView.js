import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Image,
    Linking,
    SectionList
} from "react-native";
import { useRoute } from '@react-navigation/native';
import { Block, Text, Divider } from "../../../../components";
import { theme } from "../../../../constants";

import { useSelector } from "react-redux";
import { EmptyView } from ".";
const ArticlesView = ({ longPress }) => {
    const route = useRoute();
    const articles_not_read = useSelector(state => state.article.articles?.filter(data => data?.collection_id == route.params.collection_id && data?.is_read == false))
    const articles_red = useSelector(state => state.article.articles?.filter(data => data?.collection_id == route.params.collection_id && data?.is_read == true))

    const merge = (articles_not_read?.length || articles_red?.length) ? [{ title: "unread", data: articles_not_read }, { title: "read", data: articles_red }] : []



    const _renderCollectionItem = ({ item }) => {
        return (
            <Block >
                <TouchableOpacity
                    onLongPress={() => longPress(item)}
                    onPress={() => Linking.openURL(item?.url)}
                    activeOpacity={0.5}>
                    <>
                        <Block style={styles.container} flex={false}>
                            <Block flex={false} row >
                                <Block flex={false} marginSpace={[0, theme.sizes.base1, 0, 0]}>
                                    <Image source={{ uri: item?.photo_url }} style={styles.urlIconContainer} />
                                </Block>
                                <Block flex={false} marginSpace={[0, theme.sizes.base3, 0, 0]}>
                                    <Text numberOfLines={1} regular black h3>{item?.title}</Text>
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

    const renderTitleStyle = (title) => {
        let style;
        if (title == "unread") {
            style = { display: 'none' }
        } else {
            style = articles_red == 0 ? { display: 'none' } : styles.headerRead
        }
        return style;
    }

    const _renderHeder = (title) => {
        return (
            <Block marginSpace={[10, 0, 0, 0]} style={renderTitleStyle(title)}>
                <Text center h3 regular color={theme.colors.gray} style={renderTitleStyle(title)}>{title}</Text>
            </Block>
        )
    }

    return (
        <Block>
            <SectionList
                sections={merge}
                contentContainerStyle={styles.contentCenter}
                renderSectionHeader={
                    ({ section: { title } }) => _renderHeder(title)
                }
                renderItem={_renderCollectionItem}
                keyExtractor={(item, index) => index}
                ListEmptyComponent={() => <EmptyView />}
            />
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
    },
    contentCenter: {
        flexGrow: 1,
        textAlign: 'center',
    },
    headerRead: {
        marginVertical: theme.sizes.base2
    }
});