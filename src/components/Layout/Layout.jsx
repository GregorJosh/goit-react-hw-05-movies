import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';

import styles from './Layout.module.css';

const Layout = () => {
  const { header, navigation, link } = styles;

  return (
    <>
      <header className={header}>
        <Container>
          <nav className={navigation}>
            <NavLink className={link} to="/">
              Home
            </NavLink>
            <NavLink className={link} to="movies">
              Movies
            </NavLink>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<div>Loading Page Content...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
