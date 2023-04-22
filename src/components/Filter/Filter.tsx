import ColorFilter from '../ColorFilter';
import SortBySelect from '../SortBySelect/SortBySelect';
import PriceInput from '../PriceInput/PriceInput';
import { useCallback } from 'react';

const Filter: React.FC<{ onUpdate: (colors: string[]) => void }> = ({ onUpdate }) => {
  const colors = ['red', 'black', 'white', 'green', 'yellow', 'blue', 'pink'];
  return (
    <div className="filter" >
      <SortBySelect />
      <ColorFilter colors={colors} onUpdate={onUpdate} />
      <PriceInput />
    </div >
  );
};

export default Filter;
