import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
            <nav className="portfolio__links">
                <a className="portfolio__link" href="https://github.com/" rel="noreferrer" target="_blank">
                    <p className="portfolio__name">Статичный сайт</p>
                    <p className="portfolio__pic">↗</p>
                </a>
                <div className="portfolio__divider" />
                <a className="portfolio__link" href="https://reginaginiyatova.github.io/russian-travel/" rel="noreferrer" target="_blank">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <p className="portfolio__pic">↗</p>
                </a>
                <div className="portfolio__divider" />
                <a className="portfolio__link" href="https://mesto.rs.nomoredomains.work/" rel="noreferrer" target="_blank">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <p className="portfolio__pic">↗</p>
                </a>
            </nav>
        </section>
    )
};

export default Portfolio;

