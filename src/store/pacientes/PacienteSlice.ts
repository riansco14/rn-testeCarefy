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
            return {...state, data: [...state.data, action.payload]}
        },
    },
});

export const {  adicionarPaciente } = PacienteSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPacientes = (state: RootState) => state.pacientes.data;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default PacienteSlice.reducer;
