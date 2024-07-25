
import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const ContentLoader = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.imagePlaceholder, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.textPlaceholder, { opacity: fadeAnim }]} />
            {isLoading && (
                <View onLayout={() => {
                    fadeIn();
                    setTimeout(() => {
                        fadeOut();
                        setIsLoading(false);
                    }, 2000); // Adjust timeout as needed
                }} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholder: {
        width: 200,
        height: 150,
        backgroundColor: '#ccc',
        marginBottom: 10,
    },
    textPlaceholder: {
        width: 150,
        height: 30,
        backgroundColor: '#ccc',
    },
});

export default ContentLoader;