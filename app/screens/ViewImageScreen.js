import React from 'react';
import { Image, StyleSheet, View, SafeAreaView } from "react-native";

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/backgroundmain.jpg")} />

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {
        width: 40,
        height: 40,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
        borderRadius: 100,
    },  
    deleteIcon: {
        width: 40,
        height: 40,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
        borderRadius: 100,
    }
});

export default ViewImageScreen;