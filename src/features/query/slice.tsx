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
      // console.log('state', state);
      // console.log('payload', payload);
      state.sorting = payload.sorting;
      state.direction = payload.direction;
      state.searchStr = payload.searchStr;
      state.colors = payload.colors;
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
