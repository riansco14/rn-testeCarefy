import React, { useEffect, useState } from 'react'

import { Container, Footer, Header, HeaderTitle, LocalizacaoInfo, SubTitleForm, SubTitleFormError, TitleForm } from './styles'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import { parse, isDate, isValid } from "date-fns";

import * as Location from 'expo-location';


const today = new Date();

function parseDateString(value, originalValue,) {
    const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, "dd/MM/yyyy", new Date());

    //console.log(originalValue, "\t", parsedDate, "\t",);
    if (!isValid(parsedDate)) {
        new Date('');
    }

    return parsedDate;
}

const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    dataNasc: Yup.date().typeError("Data invalida").transform(parseDateString).nullable(false).required('Data é obrigatória').max(today, "Data inválida no futuro")
})

import { InputForm } from '../../components/InputForm';
import { InputFormDate } from '../../components/InputFormDate';
import { Button } from '../../components/Button';
import { Content } from '../Login/styles';

export function CadastrarPaciente() {
    const { control, handleSubmit, reset, formState: { errors } } = useForm(
        { mode: "all", reValidateMode: 'onChange', resolver: yupResolver(schema) })
    const [dateText, setDateText] = useState('')

    async function handleRegister(form: FormData) {
    }

    useEffect(() => {
        getLocation()
    }, [])

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg("Permissão para acessar a localização negada")
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setErrorMsg(null)
        setLocation(location);
        return;
    }



    return (
        <Container>
            <Header>
                <HeaderTitle>Cadastrar Paciente</HeaderTitle>
            </Header>
            <Content>
                <TitleForm>Dados do Paciente</TitleForm>
                <InputForm name='nome' placeholder="Nome" control={control} error={errors.nome && errors.nome.message} />
                <InputFormDate placeholder='Data de Nascimento' name='dataNasc' control={control} error={errors.dataNasc && errors.dataNasc.message} type='datetime' />


                <TitleForm>Localização</TitleForm>
                <LocalizacaoInfo>
                    {location && <>
                        <SubTitleForm>Latitude: {JSON.stringify(location["coords"]["latitude"])}</SubTitleForm>
                        <SubTitleForm>Longitude: {JSON.stringify(location["coords"]["longitude"])}</SubTitleForm>
                    </>}
                    {errorMsg && <>
                        <SubTitleFormError>{errorMsg}</SubTitleFormError>
                        <Button style={{backgroundColor: "#e83f5b"}} title="Permitir Localização" onPress={getLocation}></Button>
                    </>}
                </LocalizacaoInfo>

            </Content>
            <Footer>
                <Button title="Cadastrar Paciente" onPress={handleSubmit(handleRegister)}></Button>
            </Footer>
        </Container>
    )
}