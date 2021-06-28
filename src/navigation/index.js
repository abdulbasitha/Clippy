import React from "react";
import { Text, Block } from "../components";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-remix-icon';
import * as SCREENS from '../screens'
import * as SCREEN_NAMES from "./screen_names";
import { theme } from "../constants";

const Stack = createStackNavigator();
export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={SCREEN_NAMES.CLIPS}
                screenOptions={{
                    headerTitle: () => <Text size={theme.sizes.caption * 1.5} white semiBold> Clippy </Text>,
                    headerStyle: {
                        backgroundColor: theme.colors.primary,
                    },
                    headerTitleAlign: "center",
                    headerBackImage: () =>
                    (
                        <Block marginSpace={[0, 0, 0, theme.sizes.base1]}>
                            <Icon name="arrow-left-s-line"
                                size={theme.sizes.base4}
                                color={theme.colors.white}
                            />
                        </Block>
                    ),
                    headerBackTitleVisible: false,
                }}
            >
                <Stack.Screen name={SCREEN_NAMES.CLIPS} component={SCREENS.Clips} />
                <Stack.Screen name={SCREEN_NAMES.ARTICLES} component={SCREENS.Articles} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
