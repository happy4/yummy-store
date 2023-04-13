import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const PriceInput = () => {
  return (
    <>
      <InputLabel htmlFor="price-range-input">Price</InputLabel>
      <Input type="range" id="price-range-input" name="price" inputProps={{ min: 0, max: 10000 }} />
    </>
  );
}

export default PriceInput;
