import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    flex:1;
    flex-direction: row;

    background-color: ${({ theme }) => theme.colors.shape};
    
    padding: 10px 0;
    border-radius: 6px;
    margin-top: 4px;
`
export const PacienteInfo = styled.View`
    margin-left: 12px;
`
export const IconBackground = styled.View`
    background-color: #2b7be3;
    border-radius: 6px;
`

export const Icon = styled(MaterialIcons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 36px;

    padding: 8px;

`

export const Nome = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
     font-size: 16px;
     color: ${({ theme }) => theme.colors.title};
`