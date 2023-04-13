import { useAppSelector, useAppDispatch } from '../../hooks';
import type { RootState } from '../../store';
import { actions } from '../../features/query/reducer';

import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const searchValue = (e.target as HTMLInputElement).value;
    dispatch(actions.setQuery({searchStr: searchValue}));
  };
  return (
    <>
      <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
      <OutlinedInput
        id="outlined-adornment-search"
        type="search"
        fullWidth
        onInput={handleInput}
        sx={{ mb: 2 }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="filter list"
              edge="end"
            />
            <SearchIcon />
          </InputAdornment>
        }
        label="Type to search"
      />
    </>
  );
};

export default SearchInput;