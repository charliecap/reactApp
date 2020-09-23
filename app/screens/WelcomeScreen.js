import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';



function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/cool.png')}>

            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo1-removebg-preview.png')} />
            </View>

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
        backgroundColor: '#ad0a9d'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#394187'
    },
    logo: {
        width: 200,
        height: 200,
        position: "absolute",
        top: 20,
    },
    logoContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center"
    }
})


export default WelcomeScreen;