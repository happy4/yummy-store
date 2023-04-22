import { actions } from './reducer';
import { AppDispatch } from '../../store';
import Params from '../../models/params';

export function fetchProducts(params: Params) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.fetchProductsRequest());
      const {
        limit = '25',
        offset = '0',
        sorting = 'rate',
        direction = 'desc',
        query = {},
        searchField = ''
      } = params;

    let url = new URLSearchParams({
      limit,
      offset,
      sorting,
      direction,
      searchField,
      searchStr: query.searchStr || '',
      colors: (query.colors || []).join(',')
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
