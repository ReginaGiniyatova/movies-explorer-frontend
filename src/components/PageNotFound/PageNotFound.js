import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <section className="error-page">
            <div className="error-page__info-container">
                <h2 className="error-page__title">404</h2>
                <p className="error-page__message">Страница не найдена</p>
            </div>
            <NavLink to="/" className="error-page__back">Назад</NavLink>
        </section>
    )
}

export default PageNotFound;