import { useState, useEffect, useRef, useCallback } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import type { RootState } from 'src/store';
import { useAppSelector, useAppDispatch } from 'src/hooks';

import SearchInput from 'src/components/SearchInput/SearchInput';
import Filter from 'src/components/Filter/Filter';
import CardItems from 'src/components/Products/Products';

import { fetchProducts } from 'src/features/profucts/actions';
import { actions } from 'src/features/query/slice';

import './Home.css';

function Home() {
  const { items: products, isFetching, more } = useAppSelector((state: RootState) => state.products);
  const { searchStr, colors, sorting, direction } = useAppSelector((state: RootState) => state.query);
  const dispatch = useAppDispatch();

  const [params, setParams] = useState({
    limit: '10',
    offset: '0',
    query: {
      searchStr,
      colors,
      sorting,
      direction,
    },
    searchField: 'name'
  });

  useEffect(() => {
    setParams({ ...params, query: { searchStr, colors, sorting, direction }, offset: '0' });
  }, [searchStr, colors, sorting, direction]);

  useEffect(() => {
    console.log('params', params);
    dispatch(fetchProducts(params));
  }, [params]);

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
    const { current: currentLoader } = loader;
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

  const onColorsUpdate = (colors: string[]) => {
    dispatch(actions.setQuery({ colors, searchStr }));
  }

  const onSearchUpdate = (searchStr: string) => {
    dispatch(actions.setQuery({ searchStr, colors }));
  }

  return (
    <Container>
      <SearchInput onUpdate={onSearchUpdate} />
      <div className="container">
        {isFetching && <p>🌀 Loading...</p>}
        <div className="wrapper">
          <Filter onUpdate={onColorsUpdate} />
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <CardItems items={products} />
          </Grid>
        </div>
      </div>
      {!isFetching && <div className="loader" ref={loader} />}
    </Container>
  );
}

export default Home;
