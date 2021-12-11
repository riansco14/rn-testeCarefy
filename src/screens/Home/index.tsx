import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import { PacienteCard } from '../../components/PacienteCard'
import { PacienteDTO } from '../../dtos/PacienteDTO';
import { selectPacientes } from '../../store/pacientes/PacienteSlice';

import { Container, Content, Header, Icon, Image, LogoutButton, Title, User, UserContainer, UserHello, UserInfo, UserName } from './styles'

export function Home() {

    const pacientes = useSelector(selectPacientes);

    function handlePacienteCard(item: PacienteDTO) {
    }

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

                {pacientes && <FlatList
                    data={pacientes}
                    keyExtractor={(item: PacienteDTO)=> item.id}
                    renderItem={({ item }) => <PacienteCard data={item} onPress={() => handlePacienteCard(item)} />}
                />}

            </Content>
        </Container>
    )
}