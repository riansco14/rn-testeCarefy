import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    width: 100%;
    padding: 18px;
    border-radius: 6px;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.secondary};

`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 14px;
    color: ${({theme})=>theme.colors.shape};
`