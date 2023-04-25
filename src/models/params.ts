import Query from './query';

interface Params {
  offset: string,
  limit: string,
  query: Query,
  searchField: string,
};

export default Params;