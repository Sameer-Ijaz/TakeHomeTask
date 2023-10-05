import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ onPress, btnText, style, textStyle }) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.btnStyle,
                    style
                ]}
            >
                <Text
                    style={[
                        styles.btnText,
                        textStyle
                    ]}
                >
                    {btnText}
                </Text>
            </TouchableOpacity>
        </View>
    )
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
        fontSize: 18,

    },
})