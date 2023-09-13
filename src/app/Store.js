import { configureStore } from '@reduxjs/toolkit';
import { cryptoAPI } from '../Services/cryptoAPI';
import { cryptoNewsApi } from '../Services/cryptoNewsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store= configureStore({
    reducer: {
        [cryptoAPI.reducerPath] : cryptoAPI.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoAPI.middleware,cryptoNewsApi.middleware),
})

setupListeners(store.dispatch);