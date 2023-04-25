import React from 'react';

import Grid from '@mui/material/Grid';

import CardItem from 'src/components/CardItem';
import Card from 'src/models/card';

const Products: React.FC<{ items: Card[] }> = ({ items }) => {
  return (
    <>
      {items.map((item, index) =>
        <Grid item xs={2} sm={3} md={3} key={index}>
          <CardItem key={item.id} item={item} />
        </Grid>
      )}
    </>
  );
};

export default React.memo(Products);
