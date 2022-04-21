import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../services/RootNavigation';
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useSelector } from 'react-redux'
import { selectUsuario } from '../store/usuario/UsuarioSlice'



export function Routes() {
    const user = useSelector(selectUsuario)

    return (
        <NavigationContainer ref={navigationRef}>
            {user.id ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}
