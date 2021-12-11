export interface PacienteDTO{
    nome: string
    dataNasc: Date
    localizacao: {
        latitude: string
        longitude: string
    }
}