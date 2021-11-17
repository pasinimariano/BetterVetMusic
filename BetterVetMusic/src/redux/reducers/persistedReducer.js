import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from './rootReducer';


const persistConfig = {
    key: 'root',
    debug: true,
    storage: AsyncStorage
};

export const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);
