import { useContext, useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Profile.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useForm } from "../../hooks/useForm";

function Profile({ onEdit, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues, isValid, errors } = useForm(
    {},
    true
  );
  const [isEditEnable, setEditEnable] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  useEffect(() => {
    setEditEnable(
      (values["name"] !== currentUser.name ||
        values["email"] !== currentUser.email) &&
        isValid
    );
  }, [handleChange, isInEditMode]);

  function handleEditMode(inEditMode) {
    setIsInEditMode(inEditMode);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onEdit({
      name: values["name"],
      email: values["email"],
    });
    setIsInEditMode(false);
  };

  return (
    <>
      <Header loggedIn={true} />
      <section className="profile">
        <form className="profile__container" onSubmit={handleSubmit}>
          <h2 className="profile__greeting">{`Привет, ${
            currentUser.name || ""
          }!`}</h2>

          <div className="profile__info-container">
            <div className="profile__info">
              <div className="profile__info-label">Имя</div>
              {isInEditMode && (
                <input
                  className="profile__info-input profile__info-label_text-align-right"
                  name="name"
                  value={values["name"]}
                  pattern="[a-zA-Zа-яА-Я\-\s]+"
                  onChange={handleChange}
                  type="text"
                  minLength="2"
                  maxLength="30"
                  required
                />
              )}
              {isInEditMode || (
                <p className="profile__info-label profile__info-label_text-align-right">{currentUser.name}</p>
              )}
            </div>
            <div className="profile__info-divider" />
            <div className="profile__info">
              <p className="profile__info-label">E-mail</p>
              {isInEditMode && (
              <input
                className="profile__info-input profile__info-label_text-align-right"
                name="email"
                value={values["email"]}
                onChange={handleChange}
                minLength="2"
                maxLength="50"
                type="email"
                pattern="^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
                required
              />
              )}
              {isInEditMode || (
                <p className="profile__info-label profile__info-label_text-align-right">{currentUser.email}</p>
              )}
            </div>
          </div>

          <div className="profile__buttons">
            {isInEditMode || (
              <>
                <button name="edit" type="button" className={`profile__button`} onClick={(e) => handleEditMode(true)}>
                  Редактировать
                </button>
                <button
                  name="logout"
                  onClick={onLogout}
                  className="profile__button profile__button_color-accent"
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
            {isInEditMode && (
              <>
                <button name="edit" type="submit" className={`profile__button ${isEditEnable || 'profile__button-disable'}`}>
                  Сохранить
                </button>
                <button
                  name="cancel"
                  onClick={(e) => handleEditMode(false)}
                  className="profile__button profile__button_color-accent"
                >
                  Отмена
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
