import Reactotron, { overlay } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';


if (__DEV__) {
  const tron = Reactotron.configure({
    host: '192.168.0.101',
  }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(reactotronSaga())
    .use(overlay())
    .setAsyncStorageHandler(AsyncStorage)
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
