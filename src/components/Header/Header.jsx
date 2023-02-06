import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Header.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

const Header = () => {
    return (
      <>
        <header className={css.header}>
          <ul className={css.routes}>
            <li className={css.routes__item}>
              <StyledLink to="/" className={css.link}>
                Home
              </StyledLink>
            </li>
            <li className={css.routes__item}>
              <StyledLink
                to="/movies"
                className={css.link_reset}
              >
                Movies
              </StyledLink>
            </li>
          </ul>
        </header>
        <Outlet />
      </>
    );
  };
  
  export default Header;