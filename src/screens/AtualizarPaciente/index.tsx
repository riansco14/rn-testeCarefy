import React, { useEffect, useState } from 'react'

import * as Location from 'expo-location';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Container, Footer, Header, HeaderTitle, LocalizacaoInfo, SubTitleForm, SubTitleFormError, TitleForm } from './styles'
import { InputForm } from '../../components/InputForm';
import { InputFormDate } from '../../components/InputFormDate';
import { Button } from '../../components/Button';
import { Content } from '../Login/styles';
import { Alert } from 'react-native';

import { parseDateString } from '../../utils/parseDateString';
import { useAppDispatch } from '../../store/hooks';
import { atualizarPaciente, removerPaciente, selectPacientes } from '../../store/pacientes/PacienteSlice';
import { PacienteDTO } from '../../dtos/PacienteDTO';
import { useSelector } from 'react-redux';
import { formatDateToString } from '../../utils/formatDateToString';




const today = new Date();

const schema = Yup.object().shape({
    nome: Yup.string().required('Nome é obrigatório'),
    dataNasc: Yup.date().typeError("Data invalida").transform(parseDateString).nullable(false).required('Data é obrigatória').max(today, "Data inválida no futuro")
})

interface Props {
    data: PacienteDTO
}

export function AtualizarPaciente({ data }: Props) {

    const pacientes = useSelector(selectPacientes);
    data = pacientes[pacientes.length - 1]

    const dispatch = useAppDispatch();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        getLocation()
    }, [])


    const { control, handleSubmit, reset, formState: { errors }, setValue } = useForm(
        { mode: "all", reValidateMode: 'onChange', resolver: yupResolver(schema) })

    useEffect(() => {
        setValue('nome', data.nome, { shouldValidate: true })
        setValue('dataNasc', formatDateToString(data.dataNasc), { shouldValidate: true })
    }, [])

    async function handleRegister(form) {
        if (!location) {
            return Alert.alert("Insira localização, por favor")
        }

        try {
            const pacienteData = {
                id: data.id,
                nome: form.nome,
                dataNasc: form.dataNasc,
                localizacao: {
                    latitude: JSON.stringify(location["coords"]["latitude"]),
                    longitude: JSON.stringify(location["coords"]["longitude"])
                }
            }
            //console.log(pacienteData);

            dispatch(atualizarPaciente(pacienteData))
        } catch (error) {
            console.log(error);

            return Alert.alert("Não foi possível adicionar")
        }

    }

    async function handleDelete() {
        return Alert.alert(
            "Você tem certeza ?",
            "Deseja remover o paciente " + data.nome + " ?",
            [
                {
                    text: "Sim",
                    onPress: () => {
                        dispatch(removerPaciente(data))
                    },
                },
                {
                    text: "Não",
                },
            ]
        );
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
                        <Button style={{ backgroundColor: "#e83f5b" }} title="Permitir Localização" onPress={getLocation}></Button>
                    </>}
                </LocalizacaoInfo>

            </Content>
            <Footer>
                <Button title="Atualizar Paciente" onPress={handleSubmit(handleRegister)}></Button>

                <Button style={{backgroundColor: "#e83f5b", marginTop: 20}} title="Remover Paciente" onPress={handleDelete}></Button>
            </Footer>
        </Container>
    )
}