import {combineReducers, createStore} from '@reduxjs/toolkit';
import mainReducer from "./reducers/mainReducer";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  mainReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };