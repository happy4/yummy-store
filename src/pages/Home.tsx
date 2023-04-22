import { useState, useEffect, useRef, useCallback } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import type { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../hooks';

import SearchInput from '../components/SearchInput/SearchInput';
import Filter from '../components/Filter/Filter';
import CardItems from '../components/Products/Products';

import { fetchProducts } from '../features/profucts/actions';
import { actions } from '../features/query/reducer';

import './Home.css';

function Home() {
  const { items: products, isFetching, more } = useAppSelector((state: RootState) => state.products);
  const { searchStr, colors } = useAppSelector((state: RootState) => state.query);
  const dispatch = useAppDispatch();

  console.log('products', products.length, searchStr, more);

  const [params, setParams] = useState({
    limit: '10',
    offset: '0',
    sorting: 'rate',
    direction: 'desc',
    query: {
      searchStr,
      colors
    },
    searchField: 'name'
  });

  const loader = useRef(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && more) {
      setParams((prevParams) => ({
        ...prevParams,
        offset: prevParams.offset + 10
      }));
    }
  }, [isFetching]);

  useEffect(() => {
    const {current: currentLoader} = loader;
    if (!currentLoader) return;
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5
    };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(currentLoader);
    return () => {
      observer.unobserve(currentLoader);
    }
  }, [handleObserver]);

  useEffect(() => {
    setParams({ ...params, query: { searchStr, colors }, offset: '0' });
  }, [searchStr, colors]);

  useEffect(() => {
    dispatch(fetchProducts(params));
  }, [params]);

  const onColorsUpdate = (colors: string[]) => {
    dispatch(actions.setQuery({colors, searchStr}));
  }

  const onSearchUpdate = (searchStr: string) => {
    dispatch(actions.setQuery({ searchStr, colors }));
  }

  return (
    <Container>
      <SearchInput onUpdate={onSearchUpdate} />
      <div className="container">
        <div className="wrapper">
          <Filter onUpdate={onColorsUpdate}  />
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <CardItems items={products} />
          </Grid>
        </div>
        {isFetching && <p>🌀 Loading...</p>}
      </div>
      {!isFetching && <div className="loader" ref={loader} />}
    </Container>
  );
}

export default Home;
