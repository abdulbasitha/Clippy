import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Block, Text, Divider } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../constants";
import * as SCREEN_NAMES from "../../../../navigation/screen_names";
import { EmptyView} from ".";
const CollectionsView = ({data}) => {
    const navigation = useNavigation();
    const articles = useSelector(state => state.article.articles)


    const articleExist = (id)=> {
        return articles.filter(data => data.collection_id == id)
    }
    const _renderCollectionItem = ({item}) => {
        let article = articleExist(item.id)

        return (
            <Block >
                <TouchableOpacity onPress={() => navigation.navigate("ARTICLES",{collection_id:item?.id})} activeOpacity={0.5}>
                    <>
                        <Block style={styles.container} flex={false}>
                            <Block flex={false}>
                                <Text regular black h3>{item?.collection_name}</Text>
                            </Block>
                            <Block flex={false} marginSpace={[theme.sizes.base1, 0, 0, 0]}>
                                <Text regular h4 color={theme.colors.gray} numberOfLines={1}>{article?.length ? article[0].title : "No clips!"}</Text>
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
        <FlatList
        contentContainerStyle={styles.contentCenter}
        data={data}
        renderItem={_renderCollectionItem}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={()=> <EmptyView/>}
      />


        </Block>
    )
}
export default CollectionsView;

const styles = StyleSheet.create({
    container: {
        marginVertical: theme.sizes.padding4,
        marginHorizontal: theme.sizes.padding3
    },
    dividerContainer: {
        marginVertical: 0,
        marginHorizontal: 0,
        width: "100%"
    },
    contentCenter:{
        flexGrow: 1,
        textAlign: 'center',
    }
});