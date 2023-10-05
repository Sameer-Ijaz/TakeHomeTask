import { StyleSheet, Text, View, Image, Switch } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../components/CustomButton'
import { Button } from 'react-native'
import { ThemeContext } from '../context/Theme'
import { ToggleButton } from 'react-native-paper'



export default function Home({ navigation }) {
    const { toggleTheme } = useContext(ThemeContext);
    const { isDark } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        toggleTheme()
    };
    return (
        <View style={[styles.container, isDark && styles.darkContainer]}>
            <View style={styles.innerContainer}>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Image
                    resizeMode='contain'
                    source={require('../../assets/logo.png')}
                    style={styles.imgStyle}
                />
                <Text style={styles.txtStyle}>Welcome to KnowMe</Text>
                <Text style={styles.subText}>Contacts - simple & secure</Text>
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton onPress={() => navigation.navigate('Login')} btnText={'Create new Account'} />
                <CustomButton onPress={() => navigation.navigate('Login')} textStyle={{ color: 'black' }}
                    style={styles.btnStyle} btnText={'Login'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    innerContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    txtStyle: {
        fontSize: 24, fontWeight: "bold"
    },
    buttonContainer: {
        justifyContent: 'flex-end', width: '100%', padding: 32, marginBottom: 16
    },
    subText: {
        color: "#B5B5BC", fontSize: 14, marginTop: 8
    },
    btnStyle: {
        backgroundColor: 'white', borderColor: 'black', borderWidth: 2, marginTop: 12
    },
    imgStyle: {
        height: 250, width: 250
    },
    darkContainer: {
        backgroundColor: 'black',
    }
})