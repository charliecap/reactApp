import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/backgroundmain.jpg')}>
            <Image
                styles={styles.logo}
                source={require('../assets/logo1-removebg-preview.png')} />
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#03fcf4'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#b603fc'
    },
    logo: {
        width: 30,
        height: 30,
        position: "absolute",
        top: 20,

    }
})


export default WelcomeScreen;