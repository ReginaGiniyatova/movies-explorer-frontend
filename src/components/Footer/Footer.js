import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__divider" />

            <div className="footer__container">
                <p className="footer__copyright">&copy;	{ new Date().getFullYear() }</p>
                <nav className="footer__links">
                    <a className="footer__link" href="https://github.com/" rel="noreferrer" target="_blank">GitHub</a>
                    <a className="footer__link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
                </nav>
            </div>
        </footer>

    )
};

export default Footer;