import Query from './query';

interface Params {
  offset: string,
  limit: string,
  sorting: string,
  direction: string,
  query: Query,
  searchField: string,
};

export default Params;