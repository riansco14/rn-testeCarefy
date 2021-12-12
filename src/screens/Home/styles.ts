import { BorderlessButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'


export const Container = styled.View`
    flex:1;
`

export const UserContainer = styled.View`
    padding: 0 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
`
export const Header = styled.View`
    width: 100%;
    height: 15%;
    background-color: ${({ theme }) => theme.colors.primary};
    background-color: #2b7be3;

`
export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`
export const Image = styled.Image`
    width: 48px;
    height: 48px;

    border-radius: 10px;
`
export const User = styled.View`
    margin-left: 17px;
`
export const UserHello = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.colors.shape};
`
export const UserName = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: 18px;
     color: ${({ theme }) => theme.colors.shape};
`
export const LogoutButton = styled(BorderlessButton)`

`

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 24px;
`

export const Content = styled.View`
    flex:1;
    padding: 20px;
`

export const Title = styled.Text`
     font-family: ${({ theme }) => theme.fonts.bold};
     font-size: 24px;
     color: ${({ theme }) => theme.colors.secondary};
`

export const FloatingButtonContainer = styled.View`
    position: absolute;
    bottom: 20px;
    right: 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    margin-top: 18px;
    margin-left: 24px;

    background-color: #2b7be3;

    border-radius: 15px;

`
export const FloatingButton = styled(BorderlessButton)`
    width: 60px;
    height: 60px;
    align-items: center;
    justify-content: center;
`

export const IconFloating = styled(Feather)`
    color: ${({ theme }) => theme.colors.background};
    font-size: 30px;
`