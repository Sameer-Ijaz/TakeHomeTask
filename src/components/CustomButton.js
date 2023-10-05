import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Foundation } from '@expo/vector-icons';  // Ensure you've installed @expo/vector-icons

export default function CustomButton({ onPress, btnText, style, textStyle, icon }) {
    const hasIcon = Boolean(icon);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.btnStyle,
                    hasIcon ? { backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginBottom: 16 } : {},
                    style
                ]}
            >
                {hasIcon && <Foundation name={icon} size={24} color="black" style={styles.icon} />}
                <Text
                    style={[
                        styles.btnText,
                        hasIcon ? { color: 'black' } : {},
                        textStyle
                    ]}
                >
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        borderRadius: 24,
        justifyContent: 'center',  // Text will be centered
        backgroundColor: '#0F46EA',
        width: 350
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    icon: {
        position: 'absolute',  // This will absolutely position the icon
        left: 16  // Set a value for left to position the icon. Adjust as needed.
    }
});
