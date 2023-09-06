import { useLoaderData } from 'react-router-dom';
import Card from 'src/models/card';

import CSS from './Producr.module.css';

function Product() {
  const data = useLoaderData() as Card;

  return (
    <>
      <div>Product #: {data.id}</div>
      <div>Color: {data.color}</div>
      <label>
        <input type="checkbox" />
        <div className={CSS.check}></div>
      </label>
    </>
  );
}

export default Product;

export const ProductLoader = async (id: string) => {
  const data = await fetch(`/products/${id}`)
    .then(res => res.json())
    .then(data => JSON.parse(data.message))
    .catch(e => console.error(e));
  return data;
};
