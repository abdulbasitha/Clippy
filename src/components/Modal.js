import React, { useEffect, useRef } from 'react';
import {
    Text,
    Animated,
    Dimensions,
    Modal,
    PanResponder,
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { theme } from '../constants';
import Icon from 'react-native-remix-icon';
const CustomModal = (props) => {
    const screenHeight = Dimensions.get('screen').height;
    const panY = useRef(new Animated.Value(screenHeight)).current;

    const resetPositionAnim = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });
    const closeAnim = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 500,
        useNativeDriver: true,
    });
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });
    const handleDismiss = () => {
        closeAnim.start(props.onDismiss)
    };
    useEffect(() => {
        resetPositionAnim.start();
    }, [resetPositionAnim]);
    const panResponders = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderMove: Animated.event([null, { dy: panY }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gs) => {
                if (gs.dy > 0 && gs.vy > 2) {
                    return handleDismiss();
                }
                return resetPositionAnim.start();
            },
        }),
    ).current;
    const { title } = props;
    const containerStyle = props.customContainerStyle || styles.container
    const headerTittleContainer = props.headerTittleContainer || styles.headerTittleContainer
    const headerTitleStyle = props.headerTittleStyle || styles.headerTittle
    const closeIconEnabled = props.closeIconEnabled && true

    return (
        <Modal
            animated
            animationType="fade"
            visible={props.visible}
            transparent
            onRequestClose={handleDismiss}>
            <TouchableWithoutFeedback onPress={() => handleDismiss()}>

            <View style={styles.overlay} >
                <Animated.View
                    style={{
                        ...containerStyle,
                        transform: [{ translateY: translateY }],
                    }}
                    {...panResponders.panHandlers}
                    >
                    <View style={styles.sliderIndicatorRow}>
                        <View style={styles.sliderIndicator} />
                    </View>
                    <View style={headerTittleContainer}>
                        {title &&
                            <View style={headerTittleContainer}>
                                <Text style={headerTitleStyle}>{title}</Text>
                            </View>
                        }

                       {closeIconEnabled && <TouchableOpacity
                            hitSlop={{
                                top: theme.sizes.padding3,
                                bottom: theme.sizes.padding3,
                                left: theme.sizes.padding3,
                                right: theme.sizes.padding3
                            }}
                            onPress={() => handleDismiss()}
                            style={styles.iconContainerStyle}>
                            <Icon name={"close-fill"}
                                size={theme.sizes.padding2 * 2}
                                color={theme.colors.black} />
                        </TouchableOpacity>}

                    </View>
                    {props.children}
                </Animated.View>

            </View>
            </TouchableWithoutFeedback>
        </Modal>

    );
};
export default CustomModal;
const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        paddingTop: theme.sizes.padding2,
        paddingHorizontal: theme.sizes.padding2,
        borderTopRightRadius: theme.sizes.padding3,
        borderTopLeftRadius: theme.sizes.padding3,
        minHeight: "90%",
    },
    sliderIndicatorRow: {
        flexDirection: 'row',
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        paddingTop: theme.colors.padding1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTittleContainer: {
        alignItems: "center",
    },
    headerTittle: {
        paddingTop: theme.sizes.padding1,
        textAlign: "center",
        fontSize: theme.sizes.title,
        color: theme.colors.lightBack
    },
    iconContainerStyle: {
        position: "absolute",
        right: 0,
        padding: theme.colors.padding1
    },
    sliderIndicator: {
        backgroundColor: '#CECECE',
        height: 4,
        width: 45,
    },
});