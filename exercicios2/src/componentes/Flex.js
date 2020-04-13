import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    norte: {
        flex: 1,
        backgroundColor: "#bdf9ed",
        alignItems: 'center',
        justifyContent: 'center'

    },
    centro: {
        flex: 2,
        backgroundColor: "#f2f9bd",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sul: {
        flex: 1,
        backgroundColor: "#bdf6ca",
        alignItems: 'center',
        justifyContent: 'center'
    },
    circulo: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50,
    }
})

const Circulo = props => {
    return <View style={styles.circulo}></View>
} 

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.norte}>
                <Circulo />
            </View>
            <View style={styles.centro}>
                <Circulo />
                <Circulo />
                <Circulo />
            </View>
            <View style={styles.sul}>
                <Circulo />
            </View>
        </View>
    )
}