import ColorFilter from 'src/components/ColorFilter';
import SortBySelect from 'src/components/SortBySelect/SortBySelect';
import PriceInput from 'src/components/PriceInput/PriceInput';

import CSS from './Filter.module.css';

const Filter: React.FC<{ onUpdate: (colors: string[]) => void }> = ({ onUpdate }) => {
  const colors = ['red', 'black', 'white', 'green', 'yellow', 'blue', 'pink'];
  return (
    <div className={CSS.filter} >
      <SortBySelect />
      <ColorFilter colors={colors} onUpdate={onUpdate} />
      <PriceInput />
    </div >
  );
};

export default Filter;
