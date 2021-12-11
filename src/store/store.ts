import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import messageReducer from '../store/message/MessageSlice';
import pacientesReducer from '../store/pacientes/PacienteSlice';
import usuarioReducer from '../store/usuario/UsuarioSlice';

const reducers = combineReducers({
    message: messageReducer,
    pacientes: pacientesReducer,
    usuario: usuarioReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 3,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
