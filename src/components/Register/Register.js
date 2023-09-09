import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { useForm } from "../../hooks/useForm";

function Register({ onSubmit, errorMessage, resetErrors }) {
  const { values, handleChange, setValues, isValid, errors } = useForm({});
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsFormDisabled(true);
    onSubmit({
      email: values["email"],
      password: values["password"],
      name: values["name"],
    });
  };

  useEffect(() => {
    setIsFormDisabled(false);
  }, [errorMessage]);

  useEffect(() => {
    return resetErrors;
  }, []);

  return (
    <section className="register">
      <div className="register__container">
        <NavLink to="/" className="register__logo" alt="logo" />

        <h2 className="register__greeting">Добро пожаловать!</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form__input-container">
            <p className="register-form__label">Имя</p>
            <input
              id="register-input__name"
              autoComplete="user-name"
              className="register-form__input"
              type="text"
              pattern="[a-zA-Zа-яА-Я\-\s]+"
              name="name"
              value={values["name"] || ""}
              onChange={handleChange}
              minLength="2"
              maxLength="30"
              disabled={isFormDisabled}
              required
            />
            <p className="register-form__input-error">{errors["name"]}</p>
          </div>

          <div className="register-form__input-container">
            <p className="register-form__label">E-mail</p>
            <input
              id="register-input__email"
              autoComplete="email"
              className="register-form__input"
              type="email"
              pattern="^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
              name="email"
              value={values["email"] || ""}
              onChange={handleChange}
              minLength="2"
              disabled={isFormDisabled}
              maxLength="30"
              required
            />
            <p className="register-form__input-error">{errors["email"]}</p>
          </div>

          <div className="register-form__input-container">
            <p className="register-form__label">Пароль</p>
            <input
              id="register-input__password"
              autoComplete="current-password"
              className="register-form__input"
              type="password"
              name="password"
              value={values["password"] || ""}
              onChange={handleChange}
              disabled={isFormDisabled}
              minLength="2"
              maxLength="30"
              required
            />
            <p className="register-form__input-error">{errors["password"]}</p>
          </div>

          <div className="register-form__submit-container">
            <p className="register-form__error">{errorMessage || ""}</p>
            <button
              className={`register-form__submit-btn ${
                (isValid && !isFormDisabled) ||
                "register-form__submit-btn_disabled"
              }`}
              type="submit"
              disabled={isFormDisabled}
            >
              Зарегистрироваться
            </button>
          </div>
        </form>

        <nav className="register__links">
          <p className="register__link register__link_inactive">
            Уже зарегистрированы?
          </p>
          <NavLink to="/signin" className="register__link">
            Войти
          </NavLink>
        </nav>
      </div>
    </section>
  );
}

export default Register;
