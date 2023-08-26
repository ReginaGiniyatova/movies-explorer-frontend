import { useContext } from "react";
import Header from "../Header/Header";
import './Profile.css';
import { NavLink } from 'react-router-dom'; 
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile() {
    const currentUser = useContext(CurrentUserContext);
    return (
        <>
            <Header loggedIn={true}/>
            <section className="profile">
                <div className="profile__container">
                    <h2 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h2>

                    <div className="profile__info-container">
                        <div className="profile__info">
                            <div className="profile__info-label">Имя</div>
                            <p className="profile__info-label profile__info-label_text-align-right">{currentUser.name}</p>
                        </div>
                        <div className="profile__info-divider" />
                        <div className="profile__info">
                            <p className="profile__info-label">E-mail</p>
                            <p className="profile__info-label profile__info-label_text-align-right">{currentUser.email}</p>
                        </div>
                    </div>


                    <nav className="profile__links">
                        <NavLink to="/" className="profile__link">Редактировать</NavLink>
                        <NavLink to="/" className="profile__link profile__link_color-accent">Выйти из аккаунта</NavLink>
                    </nav>
                </div>

            </section>
        </>
    )
}

export default Profile;