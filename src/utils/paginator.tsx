import { RestRequest } from 'msw'
import Card from 'src/models/card';

const sortCb = (a: any, b: any, desc: boolean, prop: string) => {
  if (a[prop] < b[prop]) return desc ? 1 : -1;
  if (a[prop] > b[prop]) return desc ? -1 : 1;

  return 0; // equal (a == b)
};

const filterByFieldCb = (rows: [], prop: string, query: string | string[]) => {
  if (Array.isArray(query)) {
    const results: [] = [];
    query.forEach((q) => {
      results.push(...rows.filter((item) => (item[prop] as string) === 'q'));
    });
    return results;
  }
  return rows.filter((item) => (item[prop] as string).toLowerCase().includes(query as string));
}

const filterByColors = (rows: Card[], colors: string[]) => {
  return rows.filter((item) => colors.indexOf(item.color) > -1);
};

/**
 * Returns rows paginated by request parameters.
 * Callback must be passed to generate mocked data.
 */
export default function paginator(request: RestRequest, items: []) {
  const searchParams = new URLSearchParams(request.url.href);

  const limit = parseInt(searchParams.get('limit') || '25', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const sortBy = searchParams.get('sorting');
  const sortOrder = searchParams.get('direction');
  const searchStr = searchParams.get('searchStr');
  const colors = (searchParams.get('colors') || '').split(',');
  const searchField = searchParams.get('searchField');

console.log('searchStr', searchStr);
console.log('colors', colors);
console.log('sortBy', sortBy);
console.log('sortOrder', sortOrder);

  let rows: Card[] = items;
  const hasMore: boolean = offset < items.length;
  let total:number = items.length;

  if (!hasMore) {
    return {
      rows: [], total, limit, offset, more: hasMore
    };
  }

  if (searchStr && searchField) {
    rows = filterByFieldCb(items, searchField, searchStr);
  }
  if (colors.length > 0 && colors[0] !== '') {
    rows = filterByColors(rows, colors);
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
