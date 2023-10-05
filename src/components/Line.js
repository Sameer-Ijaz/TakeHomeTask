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
        marginVertical: 12// Add some vertical margin for visual spacing
    },
    line: {
        flex: 1, // Takes up equal amount of space on both sides
        height: 1,
        backgroundColor: 'grey', // Adjust color as needed
        marginHorizontal: 10, // Some space between the line and the "OR" text
    },
    text: {
        fontSize: 16,
        color: 'grey', // Adjust color as needed
    },
});
