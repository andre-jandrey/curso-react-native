import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default createDrawerNavigator({
    Simples: {
        screen: () => <Simples texto="Flexibel"/>,
        navigationOptions: { title: 'Simples sss'}
    },
    ParImpar: {
        screen: () => <ParImpar numero={3}></ParImpar>
    }
}, { drawerWidth: 300 })