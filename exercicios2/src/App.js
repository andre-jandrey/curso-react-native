import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f40}>Olaa</Text>
        <Simples texto="Flexivel!!" />
        <ParImpar numero="3" />
        <ParImpar numero="8" />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  f40: {
    fontSize: 40
  }

});
