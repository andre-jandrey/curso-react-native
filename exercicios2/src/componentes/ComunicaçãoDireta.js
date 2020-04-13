import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fonstSize: 30 } }

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        { /*props.children*/}
        {React.Children.map(props.children,
            c => React.cloneElement(c, { ...props, ...c.props }))}
    </View>

export const Avo = props => 
<View>
        <Text {...fonte}>Avo: {props.nome} {props.sobrenome}</Text>
        <Pai nome="andré" sobrenome={props.sobrenome}>
            <Filho nome="Ana" />
            <Filho nome="Pedro" />
        </Pai>
        <Pai {...props} nome="Julio">
            <Filho nome="rebeca"></Filho>
            <Filho nome="|Renato"/>
        </Pai>
</View>