import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction } from '@reduxjs/toolkit';
import { goBack } from '../../services/RootNavigation';

export const adicionarPacientesAsync = createAction('pacientes/adicionarPaciente');
function* addPacientesSagas(action) {
    console.log("Dados", action.payload);
    goBack()
}

export function* todoSaga() {
  yield takeLatest(adicionarPacientesAsync, addPacientesSagas);
}