import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const getNavLinkClassName = ({ isActive }) =>
  clsx(s.movieInfoLink, isActive && s.activeLink);

export const AdditionalInfoNavigation = ({ state }) => {
  return (
    <ul className={s.movieInfoWrapper}>
      <li className={s.linkWrap}>
        <NavLink to="cast" className={getNavLinkClassName} state={state}>
          Cast
        </NavLink>
      </li>
      <li className={s.linkWrap}>
        <NavLink to="reviews" className={getNavLinkClassName} state={state}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

AdditionalInfoNavigation.propTypes = {
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
