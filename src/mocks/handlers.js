import { rest } from 'msw'
import generateProduct from '../components/Products/mock';
import paginate from '../utils/paginator';

const productsArr = [];
for(let i=0; i<20; i++) {
  productsArr.push(generateProduct(i));
}
console.log('productsArr', productsArr);

export const handlers = [
  rest.get('/products', (req, res, ctx) => {
    // const limit = req.url.searchParams.get('limit');
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
      }),
    )
  }),
];
