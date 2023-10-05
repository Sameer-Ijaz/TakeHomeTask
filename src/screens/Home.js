import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

export default function Home() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'white'
        }}>
            <Image
                resizeMode='center'
                source={require('../../assets/logo.png')}
                style={{ height: '25%', width: '100%' }}

            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome to KnowMe</Text>
            <Text style={{ color: "#B5B5BC", fontSize: 14, marginTop: 8 }}>Contacts - simple & secure</Text>

        </View>
    )
}

const styles = StyleSheet.create({})