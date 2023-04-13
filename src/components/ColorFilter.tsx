import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const ColorFilter: React.FC<{ colors: string[], onColorFilter: (colors: string[]) => void }>
  = ({ colors, onColorFilter }) => {
    const [activeColors, setColors] = useState(colors);

    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const filter = e.target.value;
      const filteredColors = colors.filter(color => color.includes(filter));
      setColors(filteredColors);
      // onColorFilter(filteredColors);
    };

    return (
      <>
        <TextField id="color-filter" label="Color" variant="outlined" type="search" onChange={filterHandler} />
        <FormGroup>
          {activeColors.map(color => <FormControlLabel control={<Checkbox />} key={uuid()} label={color} />)}
        </FormGroup>
      </>
    );
  };

export default ColorFilter;
