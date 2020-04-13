import React, { Component } from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Joasdasdão', nota: 7.9 },
    { id: 3, nome: 'asdsd', nota: 7.9 },
    { id: 4, nome: 'FJoão', nota: 7.9 },
    { id: 5, nome: 'Jozxzxcão', nota: 7.9 },
    { id: 6, nome: 'ereJoão', nota: 7.9 },
    { id: 7, nome: 'EJoão', nota: 7.9 },
    { id: 8, nome: 'GJasdasdoão', nota: 7.9 },
    { id: 9, nome: 'RJoão', nota: 7.9 },
    { id: 10, nome: 'GJoão', nota: 7.9 },
    { id: 11, nome: 'asdasd', nota: 7.9 },
    { id: 12, nome: 'João', nota: 7.9 },
    { id: 13, nome: 'CJozxczxcão', nota: 7.9 },
    { id: 14, nome: 'João', nota: 7.9 },
    { id: 15, nome: 'João', nota: 7.9 },
    { id: 16, nome: 'zcee', nota: 7.9 },
    { id: 17, nome: 'BBJoão', nota: 7.9 },
    { id: 18, nome: 'João', nota: 7.9 },
    { id: 19, nome: 'Joiioão', nota: 7.9 },
    { id: 20, nome: 'AAAAJoão', nota: 7.9 },
]

const itemEstilo = { 
    paddingHorizontal: 15,
    height: 70,
    backgroundColor: "#DDD",
    borderWidth: 0.5,
    borderColor: "#222",

    //flex
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
}
export const Aluno = props =>  
    <View style={itemEstilo}>
        <Text> Nome: {props.nome}</Text> 
        <Text style={{fontWeight: 'bold'}}> Nota: {props.nota}</Text> 
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()}  />
        </ScrollView>
    )
} 
