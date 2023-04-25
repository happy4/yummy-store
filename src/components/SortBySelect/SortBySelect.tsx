import { useState, useCallback } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { actions } from 'src/features/query/slice';

import { useAppDispatch } from 'src/hooks';

const SortBy = () => {
  const [sortBy, setSortBy] = useState('popular');

  const dispatch = useAppDispatch();

  const onSortHandler = useCallback((event: SelectChangeEvent<String>) => {
    const sort = event.target.value as string;
    if (sort === 'low_to_high') {
      dispatch(actions.setQuery({ sorting: 'price', direction: 'asc' }));
    } else if (sort === 'high_to_low') {
      dispatch(actions.setQuery({ sorting: 'price', direction: 'desc' }));
    } else {
      dispatch(actions.setQuery({ sorting: 'rate', direction: 'desc' }));
    }
    setSortBy(sort);
  }, []);

  return (
    <FormControl sx={{ mb: 2 }} fullWidth>
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        label="Sort by"
        value={sortBy}
        onChange={onSortHandler}
      >
        <MenuItem value={'low_to_high'}>Price Low to High</MenuItem>
        <MenuItem value={'high_to_low'}>Price High to Low</MenuItem>
        <MenuItem value={'popular'}>Popular First</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBy;
