import { createSlice } from '@reduxjs/toolkit';

import Query from '../../models/query';

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
      // state = {...state, ...payload};
      state.searchStr = payload.searchStr;
    },
    resetQuery: (state) => {
      state = initialState;
    }
  }
});

export const actions = querySlice.actions;
export default querySlice.reducer;
