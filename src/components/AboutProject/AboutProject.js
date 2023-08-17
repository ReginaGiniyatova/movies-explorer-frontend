import './AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__divider"></div>
            <div className="about-project__table">
                <div className="about-project__table-column">
                    <h3 className="about-project__table-column-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__table-column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__table-column">
                    <h3 className="about-project__table-column-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__table-column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__progressbar">
                <p className="about-project__progressbar-black">1 неделя</p>
                <p className="about-project__progressbar-gray">4 недели</p>
                <p className="about-project__progressbar-text">Back-end</p>
                <p className="about-project__progressbar-text">Front-end</p>
            </div>

        </section>

    )
};




export default AboutProject;
