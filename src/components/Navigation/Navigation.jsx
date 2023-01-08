import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.navigationLink, isActive && s.activeLink);

export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationList}>
        <li className={s.navigationItem}>
          <NavLink to="/" className={getNavLinkClassName}>
            Home
          </NavLink>
        </li>
        <li className={s.navigationItem}>
          <NavLink to="/movies" className={getNavLinkClassName}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
