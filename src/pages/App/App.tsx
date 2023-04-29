import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from 'src/pages/Products/Products';
import ProductPage from 'src/pages/Product/Product';
import RootLayout from '../Root';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:id',
        element: <ProductPage />
      },
      {
        path: '/shopping-cart',
        element: <ShoppingCart />
      }
    ]
  }
]);
function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
