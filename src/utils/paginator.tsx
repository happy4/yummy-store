import { RestRequest } from 'msw'

const sortCb = (a: any, b: any, desc: boolean, prop: string) => {
  if (a[prop] < b[prop]) return desc ? 1 : -1;
  if (a[prop] > b[prop]) return desc ? -1 : 1;

  return 0; // equal (a == b)
};

const filterByFieldCb = (rows: [], prop: string, query: string) => {
  return rows.filter((item) => (item[prop] as string).toLowerCase().includes(query));
}

/**
 * Returns rows paginated by request parameters.
 * Callback must be passed to generate mocked data.
 */
export default function paginator(request: RestRequest, items: []) {
  const limitStr = request.url.searchParams.get('limit');
  const offsetStr = request.url.searchParams.get('offset');
  const sortBy = request.url.searchParams.get('sorting');
  const sortOrder = request.url.searchParams.get('direction');
  const query = request.url.searchParams.get('query');
  const searchField = request.url.searchParams.get('searchField');

  const limit = parseInt(limitStr || '25', 10);
  const offset = parseInt(offsetStr || '0', 10);

  let rows: void[] = items;
  const hasMore: boolean = offset < items.length;
  let total:number = items.length;

  if (!hasMore) {
    return {
      rows: [], total, limit, offset, more: hasMore
    };
  }

  debugger;

  if (query && searchField) {
    rows = filterByFieldCb(items, searchField, query);
  }
  if (sortBy && sortOrder) {
    const desc = sortOrder === 'desc';
    rows.sort((first, second) => sortCb(first, second, desc, sortBy as string));
  }
  total = rows.length;
  rows = rows.slice(offset, offset + limit);
  console.log('hasMore', hasMore, rows, total, limit, offset);
  return {
    rows, total, limit, offset, more: hasMore
  };
}
