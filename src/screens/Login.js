import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import CustomButton from '../components/CustomButton'
import SeparatorLine from '../components/Line'

export default function Login() {
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
            <CustomButton style={{ marginBottom: 32 }} btnText={'Continue'} />
            <SeparatorLine />
            <CustomButton icon='telephone' btnText={'Continue'} />
            <CustomButton icon='social-apple' btnText={'Continue'} />
            <CustomButton icon='social-google-plus' btnText={'Continue'} />
            <CustomButton icon='social-facebook' btnText={'Continue'} />

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