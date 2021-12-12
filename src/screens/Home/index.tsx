import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import { PacienteCard } from '../../components/PacienteCard'
import { PacienteDTO } from '../../dtos/PacienteDTO';
import { selectPacientes } from '../../store/pacientes/PacienteSlice';

import { Container, Content, FloatingButton, FloatingButtonContainer, Header, Icon, IconFloating, Image, LogoutButton, Title, User, UserContainer, UserHello, UserInfo, UserName } from './styles'
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/hooks';
import { removerUsuario, selectUsuario } from '../../store/usuario/UsuarioSlice';

export function Home() {
    const navigation = useNavigation();
    const usuario = useSelector(selectUsuario)
    const pacientes = useSelector(selectPacientes);

    const dispatch = useAppDispatch();
    
    
    function handlePacienteCard(item: PacienteDTO) {
        navigation.navigate("AtualizarPaciente", { data: item })
    }
    function handleAdd() {
        navigation.navigate("CadastrarPaciente")
    }
    function handleLogout() {
        dispatch(removerUsuario())
    }

    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Image source={{ uri: usuario.avatar_url }} />
                        <User>
                            <UserHello>
                                Olá,
                            </UserHello>
                            <UserName>
                                {usuario.name}
                            </UserName>

                        </User>
                    </UserInfo>
                    <LogoutButton onPress={() => handleLogout()}>
                        <Icon name="power" />
                    </LogoutButton>
                </UserContainer>
            </Header>
            <Content>
                <Title>Pacientes</Title>

                {pacientes && <FlatList
                    data={pacientes}
                    keyExtractor={(item: PacienteDTO) => item.id}
                    renderItem={({ item }: { item: PacienteDTO }) => <PacienteCard key={item.id} data={item} onPress={() => handlePacienteCard(item)} />}
                />}

            </Content>

            <FloatingButtonContainer>

                <FloatingButton onPress={() => handleAdd()} >
                    <IconFloating name="plus" />
                </FloatingButton>
            </FloatingButtonContainer>

        </Container>
    )
}