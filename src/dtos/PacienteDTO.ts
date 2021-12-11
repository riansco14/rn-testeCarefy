export interface PacienteDTO{
    id: string
    nome: string
    dataNasc: Date
    localizacao: {
        latitude: string
        longitude: string
    }
}