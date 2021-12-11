import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { UsuarioDTO } from '../../dtos/UsuarioDTO'
import api from '../../services/api'
import { useAppDispatch } from '../../store/hooks'
import { adicionarUsuario } from '../../store/usuario/UsuarioSlice'

import { Container, Content, Image } from './styles'

export function Login() {
    const [nome, setNome] = useState('riansco14')
    const dispatch = useAppDispatch()
    
    async function handleLogin() {
        const response = await api.get(`/${nome}`)
        const { id, name, login, avatar_url } = response.data
        const usuario: UsuarioDTO = {
            id,
            name,
            login,
            avatar_url
        }

        dispatch(adicionarUsuario(usuario))
    }

    return (
        <Container>
            <Content>
                <Image resizeMode='contain' source={{ uri: "https://www.carefy.com.br/public/landing/assets/logo/new_logo_white_carefy@2x.png" }} />

                <Input value={nome} onChangeText={(text) => setNome(text)} placeholder='Nick do Github' />
                <Button title='Login' onPress={() => handleLogin()} />
            </Content>

        </Container>
    )
}