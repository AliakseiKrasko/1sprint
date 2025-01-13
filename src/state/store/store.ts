import {configureStore, createStore} from '@reduxjs/toolkit';
import {counterReducer} from '../counterReducer';

export const store = configureStore({
    reducer: counterReducer,
});



// @ts-ignore
window.store = store;