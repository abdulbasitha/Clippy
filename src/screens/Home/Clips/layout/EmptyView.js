import React from "react";
import { Block, Text } from "../../../../components";
import { theme } from "../../../../constants";
const EmptyView = () => (
    <Block center middle marginSpace={theme.sizes.padding * 4}>
        <Text center regular color={theme.colors.gray}>No clips! Start by creating a collection using the + button</Text>
    </Block>
)
export default EmptyView;

