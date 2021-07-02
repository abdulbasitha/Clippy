import React from "react";
import { Block, Text } from '../../components'
import { theme } from "../../constants";
const Splash = () => {

    return (
        <Block center middle color={theme.colors.primary}>
            <Text size={theme.sizes.h4 * 2} white semiBold> Clippy </Text>
        </Block>
    );
}

export default Splash;
