import { v4 as uuid } from 'uuid';

class Card {
  id: string;
  name: string;
  color: string;
  price: number;
  rate: number;

  constructor(name: string, color: string, price: number, rate: number) {
    this.id = uuid();
    this.name = name;
    this.color = color;
    this.price = price;
    this.rate = rate;
  }
}

export default Card;

