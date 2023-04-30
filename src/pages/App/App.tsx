import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import ProductsPage from 'src/pages/Products/Products';
import ProductPage, { ProductLoader } from 'src/pages/Product/Product';
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
        element: <ProductPage />,
        loader: ({ params }) => ProductLoader(params.id as string)
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
