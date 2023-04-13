import { v4 as uuid } from 'uuid';

const getBoolean = () => Math.random() > 0.5;
const getNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);
const getName = (prefix: string) => `${prefix} ${getNumber(1, 1000)}`;
const getColor = (index: number)  => ['red', 'black', 'white', 'green', 'yellow', 'blue', 'pink'].at(index);

export default (i: number) => ({
  id: uuid(),
  name: getName(`Product ${i}`),
  color: getColor(getNumber(0, 7)),
  price: getBoolean() ? getNumber(10, 10000) : 0,
  rate: getBoolean() ? getNumber(1, 10) : 0
});
