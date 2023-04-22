import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from '../hooks';
import { actions } from '../features/query/reducer';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

type colorType = {
    [key: string]: boolean
};

const initColors: colorType = {};

const ColorFilter: React.FC<{ colors: string[], onUpdate: (colors: string[]) => void }>
  = ({ colors, onUpdate }) => {
    const dispatch = useAppDispatch();

    const [filteredColors, setFilteredColors] = useState(colors);
    const [checkedColors, setCheckedColors] = useState(initColors);

    const onColorFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
      const filter = e.target.value;
      setFilteredColors(colors.filter(color => color.includes(filter)));
    };

    const onColorCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      const updatedColors = {
        ...checkedColors,
        [value]: checked
      };
      setCheckedColors(updatedColors);
      dispatch(actions.setColors({colors: checkedColors}));
      const colorsKeys = Object.keys(updatedColors).filter(key => Boolean(updatedColors[key]));
      onUpdate(colorsKeys);
    }

    return (
      <>
        <TextField id="color-filter" label="Color" variant="outlined" type="search" onChange={onColorFilter} />
        <FormGroup>
          {filteredColors.map((color) => (
            <FormControlLabel
              control={<Checkbox onChange={onColorCheck} value={color} checked={checkedColors[color]} />}
              key={uuid()}
              label={color}
            />
          ))}
        </FormGroup>
      </>
    );
  };

export default ColorFilter;
