import React from 'react';
import styles from './NavBar.module.css';
import { MdSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';

export interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = props => {
  return (
    <Container>
      <div className={styles.navbar}>
        <div className={styles.searchWrapper}>
          <input type="text" placeholder="Search" className={styles.input} />
          <div className={styles.searchIcon}>
            <MdSearch />
          </div>
        </div>
        <div className={styles.navigation}>
          <NavLink activeClassName={styles.activeLink} exact to="/">
            Agora
          </NavLink>
          <NavLink activeClassName={styles.activeLink} to="/previsao">
            Previsão
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
