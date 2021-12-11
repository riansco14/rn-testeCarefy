import React from 'react'

import {Container, Icon, IconBackground, Nome, PacienteInfo} from './styles'

export function PacienteCard() {
    return (
        <Container>
            <IconBackground>
                <Icon name="people" />
            </IconBackground>
            <PacienteInfo>
                <Nome>Rian Rabelo</Nome>
            </PacienteInfo>

        </Container>
    )
}