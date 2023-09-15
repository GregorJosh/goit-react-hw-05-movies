import { NavLink, Outlet } from 'react-router-dom';

import Container from 'components/Container/Container';

import styles from './Layout.module.css';

const Layout = () => {
  const { header, link } = styles;

  return (
    <Container>
      <header className={header}>
        <nav>
          <NavLink className={link} to="/">Home</NavLink>
          <NavLink className={link} to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};

export default Layout;
