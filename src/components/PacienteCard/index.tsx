import React from 'react'
import { PacienteDTO } from '../../dtos/PacienteDTO'

import { Container, Icon, IconBackground, Nome, PacienteInfo } from './styles'

interface PacienteCardProps {
    data: PacienteDTO,
    onPress(): void
}

export function PacienteCard({ data, onPress }: PacienteCardProps) {
    return (
        <Container onPress={onPress}>
            <IconBackground>
                <Icon name="people" />
            </IconBackground>
            <PacienteInfo>
                <Nome>{data.nome}</Nome>
            </PacienteInfo>

        </Container>
    )
}