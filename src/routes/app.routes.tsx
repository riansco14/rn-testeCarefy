import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'
import { Home } from '../screens/Home'
import { CadastrarPaciente } from '../screens/CadastrarPaciente'
import { AtualizarPaciente } from '../screens/AtualizarPaciente'

const { Navigator, Screen } = createStackNavigator()


export function AppRoutes() {
    return (
        <Navigator headerMode="none">
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="CadastrarPaciente"
                component={CadastrarPaciente}
            />
            <Screen
                name="AtualizarPaciente"
                component={AtualizarPaciente}
            />
        </Navigator>
    )
}
