import ColorFilter from '../ColorFilter';
import SortBySelect from '../SortBySelect/SortBySelect';
import PriceInput from '../PriceInput/PriceInput';

const Filter = () => {
  const colors = ['white', 'green', 'black', 'red', 'orange'];

  const handlerColorFilter = (colors: string[]) => {

      // setParams((prevParams) => ({
      //   ...prevParams,
      //   offset: 0,
      //   query: colors[0],
      //   searchField: 'color'
      // }));
  };

  return (
    <div className="filter" >
      <SortBySelect />
      <ColorFilter colors={colors} onColorFilter={handlerColorFilter} />
      <PriceInput />
    </div >
  );
};

export default Filter;
