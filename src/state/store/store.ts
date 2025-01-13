import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {counterReducer} from '../counterReducer';



const rootReducer = combineReducers({
    counter: counterReducer,
})

export type AppRootReducer = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});



// @ts-ignore
window.store = store;