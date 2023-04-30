import { rest } from 'msw'
import generateProduct from 'src/components/Products/mock';
import paginate from 'src/utils/paginator';

const productsArr = [];
for (let i = 0; i < 20; i++) {
  productsArr.push(generateProduct(i));
}

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    const response = paginate(req, productsArr);
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: JSON.stringify({
          more: response.more,
          total: response.total,
          limit: response.limit,
          offset: response.offset,
          products: response.rows
        })
      })
    );
  }),
  rest.get('/products/:id', (req, res, ctx) => {
    const { params } = req;
    const product = productsArr.find(product => product.id === params.id);
    const { id, name, color, price, rate } = product;
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        message: JSON.stringify({
          id,
          name,
          color,
          price,
          rate
        })
      })
    );
  })
];

