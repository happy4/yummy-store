interface Query {
  colors?: string[],
  searchStr?: string,
  sorting?: string,
  direction?: string,
  minPrice?: number,
  maxPrice?: number
};

export default Query;
