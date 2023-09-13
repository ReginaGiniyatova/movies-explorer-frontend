import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    const navigate = useNavigate();

    const handleBackClick = (e) => {
        navigate(-1);
    }

    return (
        <section className="error-page">
            <div className="error-page__info-container">
                <h2 className="error-page__title">404</h2>
                <p className="error-page__message">Страница не найдена</p>
            </div>
            <p className="error-page__back" onClick={handleBackClick}>Назад</p>
        </section>
    )
}

export default PageNotFound;