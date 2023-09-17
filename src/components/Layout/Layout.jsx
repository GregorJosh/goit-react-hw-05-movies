import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';

import styles from './Layout.module.css';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  const { header, navigation, link, active } = styles;

  const setClass = ({ isActive }) => (isActive ? active : link);

  return (
    <>
      <header className={header}>
        <Container>
          <nav className={navigation}>
            <NavLink className={setClass} to="/">
              Home
            </NavLink>
            <NavLink className={setClass} to="movies">
              Movies
            </NavLink>
          </nav>
        </Container>
      </header>
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
