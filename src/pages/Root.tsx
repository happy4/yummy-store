import { Outlet } from 'react-router-dom';
import Navigation from 'src/components/Navigation/Navigation';

function RootLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
