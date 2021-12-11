import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Content, Image } from './styles'

export function Login() {
    const [nome, setNome] = useState('riansco14')
    
    return (
        <Container>
            <Content>
                <Image resizeMode='contain' source={{ uri: "https://www.carefy.com.br/public/landing/assets/logo/new_logo_white_carefy@2x.png" }} />

                <Input value={nome} onChangeText={(text) => setNome(text)} placeholder='Nick do Github' />
                <Button title='Login' onPress={() => console.log("Entrou")} />
            </Content>

        </Container>
    )
}