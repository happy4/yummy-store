import { configureStore } from '@reduxjs/toolkit'

import productsSlice from './features/profucts/slice';
import querySlice from './features/query/slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    query: querySlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
