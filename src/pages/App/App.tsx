import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductsPage from 'src/pages/Products/Products';
import ProductPage from 'src/pages/Product/Product';
import RootLayout from 'src/pages/Root';
import ShoppingCart from 'src/pages/ShoppingCart/ShoppingCart';
import ErrorPage from 'src/pages/Error/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
