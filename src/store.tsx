import { configureStore } from '@reduxjs/toolkit'

import productsReducer from './features/profucts/reducer';
import queryReducer from './features/query/reducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    query: queryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
