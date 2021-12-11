import { TextInputMask } from "react-native-masked-text";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`

export const Input = styled(TextInputMask)`
    width: 100%;
    padding: 18px 16px ;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;

    margin-bottom: 8px;
`

export const Error = styled.Text`
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.attention};
`