import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import CustomButton from '../components/CustomButton'
import SeparatorLine from '../components/Line'

export default function Login() {
    let login = [{ text: 'Signup with Phone', icon: 'telephone' },
    { text: 'Signup with Apple ID', icon: 'social-apple' },
    { text: 'Signup with Google', icon: 'social-google-plus' },
    { text: 'Signup with Facebook', icon: 'social-facebook' }
    ]
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flex: 1 }}>
            <TextInput
                mode='flat'
                outlineColor={'white'}
                placeholder='Enter your email'
                style={styles.input}
                autoCapitalize="none"
                placeholderTextColor={'grey'}
                selectionColor={'#0F46EA'}
                returnKeyLabel={'Done'}
            />
            <CustomButton btnText={'Continue'} />
            <SeparatorLine />

            {login.map((item, index) => (
                <CustomButton key={index} icon={item.icon} btnText={item.text} />
            ))}

        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#FFFF',
        marginBottom: 32,

    },
})