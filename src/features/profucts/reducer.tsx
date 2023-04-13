import { createSlice } from '@reduxjs/toolkit';

import Card from '../../models/card';

export interface ProductsState {
  items: Card[],
  more: Boolean,
  offset: number,
  total: number,
  loaded: Boolean,
  isFetching: Boolean,
  error: string
};

const initialState: ProductsState = {
  items: [],
  more: false,
  total: 0,
  offset: 0,
  loaded: true,
  isFetching: false,
  error: ''
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: (state) => {
      state.loaded = false;
      state.isFetching = true;
    },
    fetchProductsSuccess: (state, { payload }) => {
      state.loaded = true;
      state.isFetching = false;
      state.offset = state.offset + payload.offset;
      state.items = payload.offset === 0 ? payload.products : [...state.items, ...payload.products];
      state.more = payload.more;
      state.total = payload.total;
      debugger;
    },
    fetchProductsFailure: (state) => {
      state.loaded = true;
      state.isFetching = false;
      state.error = 'Something went wrong.'
    },
  }
});

export const actions = productsSlice.actions;
export default productsSlice.reducer;
