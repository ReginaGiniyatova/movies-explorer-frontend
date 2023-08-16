import { NavLink } from "react-router-dom";
import { useState } from "react";
import accountIcon from "../../images/header-account-icon.svg";
import hamburgerIcon from "../../images/header-hamburger-icon.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${loggedIn && "header_white-background"}`}>
      <NavLink to="/" className="header__logo"></NavLink>

      {loggedIn && (
        <nav className="header__nav">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "header__nav-link header__nav-link_active"
                : "header__nav-link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "header__nav-link header__nav-link_active"
                : "header__nav-link"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
      )}

      {!loggedIn && (
        <nav className={`header__menu ${loggedIn && "header__menu_collapse"}`}>
          <NavLink to="/signup" className="header__text">
            Регистрация
          </NavLink>
          <NavLink to="/signin" className="header__btn">
            Войти
          </NavLink>
        </nav>
      )}

      {loggedIn && (
        <nav
          className={`header__account-container ${
            loggedIn && "header__menu_collapse"
          }`}
        >
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "header__account-link header__nav-link_active"
                : "header__account-link"
            }
          >
            Аккаунт
          </NavLink>
          <img
            className="header__account-icon"
            src={accountIcon}
            alt="profile logo"
          ></img>
        </nav>
      )}

      {loggedIn && (
        <img
          className="header__hamburger-menu"
          src={hamburgerIcon}
          onClick={onMenuClick}
          alt="hamburger menu"
        ></img>
      )}

      <Navigation isOpen={isMenuOpen} handleMenuClose={handleMenuClose} />
    </header>
  );
}

export default Header;
