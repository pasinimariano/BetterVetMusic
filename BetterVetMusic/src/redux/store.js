import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { persistedReducer } from './reducers/persistedReducer';


const composeEnhancers = (
    __DEV__ &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store =  createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

const exports = {
    store,
    persistor
};

export default exports