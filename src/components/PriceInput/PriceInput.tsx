import { useState } from 'react';

import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import { useAppDispatch } from 'src/hooks/hooks';
import { actions } from 'src/features/query/slice';

import CSS from './PriceInput.module.css';

const PriceInput = () => {
  const dispatch = useAppDispatch();
  const [range, setRange] = useState([10, 9000]);

  const handleChange = (event: Event) => {
    const rangeValue = Array.from((event.target as HTMLInputElement).value);
    setRange(rangeValue.map(val => +val));
  }

  const filterByPrice = () => {
    dispatch(actions.setQuery({ minPrice: range[0], maxPrice: range[1]}));
  }

  return (
    <div className={CSS['price-container']}>
      <label>Price</label>
      <div className={CSS['price-wrapper']}>
        <div className={CSS['slider-wrapeer']}>
          <Slider
            getAriaLabel={() => 'Price range'}
            value={range}
            onChange={handleChange}
            valueLabelDisplay="auto"
            max={10000}
          />
        </div>
        <Button variant="outlined" onClick={filterByPrice}>OK</Button>
      </div>
    </div>
  );
}

export default PriceInput;
