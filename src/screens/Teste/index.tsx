import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { selectMessage, setMessage } from '../../store/message/MessageSlice';

import { Button, Container, TextInput, Title } from './styles';

export function Teste() {

    const message = useSelector(selectMessage);
    const dispatch = useAppDispatch();

    const [text, setText] = useState('');

    return (
        <Container>
            <Title>{message}</Title>
            <TextInput value={text} onChangeText={(text) => setText(text)} />
            <Button onPress={() => dispatch(setMessage(text))} />
        </Container>
    );
}
