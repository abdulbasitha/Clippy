import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    FlatList
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Block, Text, Divider } from "../../../../components";
import { theme } from "../../../../constants";
import * as SCREEN_NAMES from "../../../../navigation/screen_names";
import { EmptyView} from ".";
const CollectionsView = ({data}) => {
    const navigation = useNavigation();
    const _renderCollectionItem = ({item}) => {
        return (
            <Block >
                <TouchableOpacity onPress={() => navigation.navigate("ARTICLES")} activeOpacity={0.5}>
                    <>
                        <Block style={styles.container} flex={false}>
                            <Block flex={false}>
                                <Text regular black h3>{item?.collection_name}</Text>
                            </Block>
                            <Block flex={false} marginSpace={[theme.sizes.base1, 0, 0, 0]}>
                                <Text regular h4 color={theme.colors.gray}>Nullish coalescing in JavaScript - Medium</Text>
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