import React, { useRef } from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputMask, TextInputMaskMethods, TextInputMaskProps } from 'react-native-masked-text'
import { Container, Error, Input } from './styles'

interface Props extends TextInputMaskProps {
    control: Control
    name: string
    error: string
}

export function InputFormDate(
    { control,
        name,
        error,
        ...rest
    }: Props
) {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) =>
                    <Input {...rest}
                        type={'datetime'}
                        options={
                            {
                                format: "DD/MM/YYYY"
                            }
                        }
                        onChangeText={onChange}
                        value={value}
                    />} />
            {error && <Error>{error}</Error>}
        </Container>
    )
}
