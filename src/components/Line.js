import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SeparatorLine() {
    return (
        <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.text}>OR</Text>
            <View style={styles.line} />
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
        fontSize: 16,
        color: '#474658',
    },
});
