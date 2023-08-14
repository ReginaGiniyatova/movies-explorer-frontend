import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__divider"></div>
            <h3 className="techs__text">7 технологий</h3>
            <p className="techs__text-about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <li className="techs__skills">
                <ul className="techs__skillname">HTML</ul>
                <ul className="techs__skillname">CSS</ul>
                <ul className="techs__skillname">JS</ul>
                <ul className="techs__skillname">React</ul>
                <ul className="techs__skillname">Git</ul>
                <ul className="techs__skillname">Express.js</ul>
                <ul className="techs__skillname">mongoDB</ul>    
            </li>
        </section>
    )
};

export default Techs;