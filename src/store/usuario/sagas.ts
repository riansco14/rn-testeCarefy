import { all, call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { goBack } from '../../services/RootNavigation';
import api from '../../services/api';

export const adicionarPacientesAsync = createAction('pacientes/adicionarPaciente');
function* addPacientesSagas(action) {
    console.log("Dados", action.payload);
    goBack()
}

export function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.usuario.data;

  if (token) {
    api.defaults.headers.Authorization = token;
  }
}

export function* todoSaga() {
  return all([
    yield takeLatest('persist/REHYDRATE',setToken),
    yield takeLatest(adicionarPacientesAsync, addPacientesSagas),
  ])
}