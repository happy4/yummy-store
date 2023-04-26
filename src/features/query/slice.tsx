import { createSlice } from '@reduxjs/toolkit';

import Query from 'src/models/query';

const initialState: Query = {
  colors: [],
  searchStr: '',
  sorting: '',
  direction: '',
  minPrice: 0,
  maxPrice: 0
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuery: (state, { payload }) => {
      for (const [key] of Object.entries(payload)) {
        state[key as keyof Query] = payload[key];
      }
    },
    setColors: (state, { payload }) => {
      state.colors = payload.colors;
    },
    resetQuery: (state) => {
      state = initialState;
    }
  }
});

export const actions = querySlice.actions;
export default querySlice.reducer;
