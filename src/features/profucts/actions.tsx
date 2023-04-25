import { actions } from './slice';
import { AppDispatch } from 'src/store';
import Params from 'src/models/params';

export function fetchProducts(params: Params) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.fetchProductsRequest());
      const {
        limit = '25',
        offset = '0',
        query = {},
        searchField = ''
      } = params;

    let url = new URLSearchParams({
      limit,
      offset,
      searchField,
      searchStr: query.searchStr || '',
      colors: (query.colors || []).join(','),
      sorting: query.sorting || 'price',
      direction: query.direction || 'asc'
    });

    console.log('url', url.toString());

      const data = await fetch(`/products?${url.toString()}`)
        .then(res => res.json())
        .then(data => JSON.parse(data.message));
      dispatch(actions.fetchProductsSuccess(data));
    } catch {
      dispatch(actions.fetchProductsFailure());
    }
  }
}
