import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image
                    resizeMode='contain'
                    source={require('../../assets/logo.png')}
                    style={styles.imgStyle}
                />
                <Text style={styles.txtStyle}>Welcome to KnowMe</Text>
                <Text style={styles.subText}>Contacts - simple & secure</Text>
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton btnText={'Create new Account'} />
                <CustomButton textStyle={{ color: 'black' }} style={styles.btnStyle} btnText={'Login'} />
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
    }
})