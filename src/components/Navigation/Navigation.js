import { Navlink } from "react-router-dom";
import "./Navigation.css";
import closeIcon from "../../images/header-close-icon.svg";
import accountIcon from "../../images/header-account-icon.svg";
import { NavLink } from "react-router-dom";

function Navigation({ isOpen, handleMenuClose }) {
  const onCloseClick = () => {
    handleMenuClose();
  };

  return (
    <div className={`navigation ${isOpen && "navigation_visible"}`}>
      <div className="navigation__container">
        <img
          className="navigation__close"
          src={closeIcon}
          onClick={onCloseClick}
          alt="close img"
        ></img>

        <nav className="navigation__menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__menu-link navigation__menu-link_active navigation__menu-link_underline"
                : "navigation__menu-link"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__menu-link navigation__menu-link_active navigation__menu-link_underline"
                : "navigation__menu-link"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__menu-link navigation__menu-link_active navigation__menu-link_underline"
                : "navigation__menu-link"
            }
          >
            Сохранённые фильмы
          </NavLink>
          <div className="navigation-account__container">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "navigation-account__text navigation__menu-link_active navigation__menu-link_underline"
                  : "navigation-account__text"
              }
            >
              Аккаунт
            </NavLink>
            <img
              className="navigation-account__account-icon"
              src={accountIcon}
              alt="account image"
            ></img>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
