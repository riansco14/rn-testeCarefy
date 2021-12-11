import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { PacienteCard } from '../../components/PacienteCard'

import { Container, Content, Header, Icon, Image, LogoutButton, Title, User, UserContainer, UserHello, UserInfo, UserName } from './styles'

export function Home() {
    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Image source={{ uri: "https://avatars.githubusercontent.com/u/6424894?v=4" }} />
                        <User>
                            <UserHello>
                                Olá,
                            </UserHello>
                            <UserName>
                                {"Riansco14"}
                            </UserName>

                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => console.log("saiu")}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserContainer>
            </Header>
            <Content>
                <Title>Pacientes</Title>

                <FlatList
                    data={ [1,2,3]}
                    renderItem={({item})=><PacienteCard key={item} />}
                />

            </Content>
        </Container>
    )
}