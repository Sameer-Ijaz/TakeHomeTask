import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SeparatorLine({ isDark }) {
    return (
        <View style={styles.lineContainer}>
            <View style={[styles.line, isDark && { backgroundColor: 'white' }]} />
            <Text style={[styles.text, isDark && { color: 'white' }]}>or</Text>
            <View style={[styles.line, isDark && { backgroundColor: 'white' }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 42
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#474658',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 12,
        color: '#474658',
    },
});
