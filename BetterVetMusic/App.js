import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeRouter } from 'react-router-native';
import Root from './src/';
import reduxStore from './src/redux/store';


const {
    store,
    persistor
} = reduxStore;

export const App = () => {
    return (
        <Provider store= { store }>
            <PersistGate persistor= {persistor}>
                <NativeRouter>
                    <Root />
                </NativeRouter>
            </PersistGate>
        </Provider>
    )
}
