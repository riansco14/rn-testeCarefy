import createSagaMiddleware from 'redux-saga';
import { configureStore , ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import messageReducer from '../store/message/MessageSlice';
import pacientesReducer from '../store/pacientes/PacienteSlice';
import usuarioReducer from '../store/usuario/UsuarioSlice';
import { all } from 'redux-saga/effects';
import { todoSaga } from './usuario/sagas';

const reducers = combineReducers({
    message: messageReducer,
    pacientes: pacientesReducer,
    usuario: usuarioReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 4,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        thunk: false
      }).concat(sagaMiddleware)
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

    
sagaMiddleware.run(rootSaga);

function* rootSaga() {
    yield all([todoSaga()]);
}

export default store;
