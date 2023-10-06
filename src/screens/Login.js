import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { TextInput } from 'react-native-paper'
import CustomButton from '../components/CustomButton'
import SeparatorLine from '../components/Line'
import { MaterialIcons } from '@expo/vector-icons';
import { ThemeContext } from '../context/Theme'

export default function Login({ navigation }) {
    let login = [{ text: 'Signup with Phone', icon: 'telephone' },
    { text: 'Signup with Apple ID', icon: 'social-apple' },
    { text: 'Signup with Google', icon: 'social-google-plus' },
    { text: 'Signup with Facebook', icon: 'social-facebook' }
    ]
    const { isDark } = useContext(ThemeContext);

    return (
        <View style={[styles.container, isDark && styles.darkContainer]}>
            <View style={{ position: 'absolute', top: 40, left: 20, flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <MaterialIcons name="arrow-back" size={24} color={!isDark ? "#474658" : 'white'} />
                </TouchableOpacity>
                <Text style={[styles.backText, isDark && { color: 'white' }]}>Back</Text>
            </View>
            <Text style={[styles.emailText, isDark && { color: 'white', marginBottom: 6 }]}>Enter Email address</Text>
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
            <SeparatorLine isDark={isDark} />

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
    container: {
        alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', flex: 1
    },
    darkContainer: {
        backgroundColor: 'black',
    },
    backText: {
        marginLeft: 8, fontSize: 16, fontWeight: 500, color: '#474658'
    },
    emailText: {
        alignSelf: 'flex-start', paddingLeft: 32, color: '#474658'
    }
})