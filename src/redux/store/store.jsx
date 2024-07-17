import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducers } from './reducers';
import { middleware } from './middleware';

export const store = configureStore({
    reducer: reducers,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(...middleware),
})

setupListeners(store.dispatch);