import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Foundation } from '@expo/vector-icons';

export default function CustomButton({ onPress, btnText, style, textStyle, icon }) {
    const hasIcon = Boolean(icon);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.btnStyle,
                    hasIcon ? { backgroundColor: 'white', borderWidth: 2, borderColor: '#474658', marginBottom: 16 } : {},
                    style
                ]}
            >
                {hasIcon && <Foundation name={icon} size={24} color="black" style={styles.icon} />}
                <Text
                    style={[
                        styles.btnText,
                        hasIcon ? { color: '#474658' } : {},
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
        justifyContent: 'center',
        backgroundColor: '#0F46EA',
        width: 350
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: 14,
    },
    icon: {
        position: 'absolute',
        left: 16
    }
});
