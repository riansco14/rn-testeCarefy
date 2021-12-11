import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PacienteDTO } from '../../dtos/PacienteDTO';
import { RootState, AppThunk } from '../store';


export interface PacienteState {
    data: PacienteDTO[]
}

const initialState: PacienteState = {
    data: []
};


export const PacienteSlice = createSlice({
    name: 'pacientes',
    initialState,
    reducers: {
        adicionarPaciente: (state, action: PayloadAction<PacienteDTO>) => {
            return { ...state, data: [...state.data, action.payload] }
        },
        atualizarPaciente: (state, action: PayloadAction<PacienteDTO>) => {

            const index = state.data.findIndex(item => item.id === action.payload.id)
            const newArray = [...state.data]
            newArray[index] = action.payload
            
            return { ...state, data: newArray }
        },
        removerPaciente: (state, action: PayloadAction<PacienteDTO>)=>{
            const newArrayPacientes = state.data.filter(item => item.id !== action.payload.id)

            return {...state, data: newArrayPacientes}
        }
    },
});

export const { adicionarPaciente, atualizarPaciente, removerPaciente } = PacienteSlice.actions;

export const selectPacientes = (state: RootState) => state.pacientes.data;

export default PacienteSlice.reducer;
