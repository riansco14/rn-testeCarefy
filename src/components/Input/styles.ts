import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled(TextInput)`
    width: 100%;
    padding: 18px 16px ;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.shape};
    color: ${({ theme }) => theme.colors.text_dark};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;

    margin-bottom: 8px;
`