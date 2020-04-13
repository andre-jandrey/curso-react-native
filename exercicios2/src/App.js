import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicaçãoDireta'
import { TextoSincronizado } from './componentes/ComunicacaoIndireta'
import LIstaFlex from './componentes/ListaFlex'
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex'

export default class extends Component{
  render() {
    return (
      <Flex />
      /*  <ListaFlex />
      <View style={styles.container}>
        <TextoSincronizado />
        <Avo nome="João" sobrenome="Silva" />
        <Text style={styles.f40}>Olaa</Text>
        <Simples texto="Flexivel!!" />
        <ParImpar numero="3" />
        <ParImpar numero="8" />
        <Evento />
      </View>*/
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
