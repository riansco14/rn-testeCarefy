import React, { useEffect, useState } from 'react'

import * as Location from 'expo-location';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native';

import { Container, Footer, Header, HeaderTitle, LocalizacaoInfo, SubTitleForm, SubTitleFormError, TitleForm } from './styles'
import { InputForm } from '../../components/InputForm';
import { InputFormDate } from '../../components/InputFormDate';
import { Button } from '../../components/Button';
import { Content } from '../Login/styles';
import { Alert } from 'react-native';

import { parseDateString } from '../../utils/parseDateString';
import { useAppDispatch } from '../../store/hooks';
import { adicionarPaciente } from '../../store/pacientes/PacienteSlice';
import { BackButton } from '../../components/BackButton';




const today = new Date();

const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    dataNasc: Yup.date().typeError("Data invalida").transform(parseDateString).nullable(false).required('Data é obrigatória').max(today, "Data inválida no futuro")
})

export function CadastrarPaciente() {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        getLocation()
    }, [])


    const { control, handleSubmit, reset, formState: { errors } } = useForm(
        { mode: "all", reValidateMode: 'onChange', resolver: yupResolver(schema) })

    async function handleRegister(form) {
        if (!location) {
            return Alert.alert("Insira localização, por favor")
        }

        try {
            const pacienteData = {
                id: String(uuid.v4()),
                nome: form.nome,
                dataNasc: form.dataNasc,
                localizacao: {
                    latitude: JSON.stringify(location["coords"]["latitude"]),
                    longitude: JSON.stringify(location["coords"]["longitude"])
                }
            } 
            console.log(pacienteData);
            
            dispatch(adicionarPaciente(pacienteData))
            reset()

            //navigation.goBack()
            
        } catch (error) {
            console.log(error);
            
            return Alert.alert("Não foi possível adicionar")
        }

    }
    
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

    function handleGoBack() {
        navigation.goBack()
    }
    
    return (
        <Container>
            <Header>
                <BackButton onPress={handleGoBack} />
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
                        <Button style={{ backgroundColor: "#e83f5b" }} title="Permitir Localização" onPress={getLocation}></Button>
                    </>}
                </LocalizacaoInfo>

            </Content>
            <Footer>
                <Button title="Cadastrar Paciente" onPress={handleSubmit(handleRegister)}></Button>
            </Footer>
        </Container>
    )
}