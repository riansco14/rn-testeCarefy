import React from 'react';

//Redux - START
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/store/store';
import { persistStore } from 'redux-persist';
//Redux - END

import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';


import { Teste } from './src/screens/Teste';

export default function App (){

  let [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold,
  });

  if (!fontsLoaded)
    {return <AppLoading />;}

  let persistor = persistStore(store);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <Teste />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};




/*
"yarn add react-redux @reduxjs/toolkit redux-persist"
"expo install expo-font @expo-google-fonts/poppins "
"expo install expo-app-loading "
"yarn add styled-components @types/styled-components-react-native"
"yarn add axios"
"yarn add axios"
"expo install @react-native-async-storage/async-storage"
*/
