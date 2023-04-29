import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import Navigation from 'src/components/Navigation/Navigation';

function RootLayout() {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default RootLayout;
