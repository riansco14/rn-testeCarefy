import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsuarioDTO } from '../../dtos/UsuarioDTO';
import { RootState, AppThunk } from '../store';


export interface UsuarioState {
    data: UsuarioDTO
}

const initialState: UsuarioState = {
    data: {} as UsuarioDTO
};


export const UsuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        adicionarUsuario: (state, action: PayloadAction<UsuarioDTO>) => {
            return { ...state, data: action.payload }
        },
        removerUsuario: (state, action) => {
            return { ...state, data: {} as UsuarioDTO }
        },
    },
});

export const { adicionarUsuario, removerUsuario } = UsuarioSlice.actions;

export const selectUsuario = (state: RootState) => state.usuario.data;

export default UsuarioSlice.reducer;
