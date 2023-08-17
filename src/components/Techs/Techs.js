import './Techs.css';

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__divider"></div>
            <h3 className="techs__text">7 технологий</h3>
            <p className="techs__text-about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__skills">
                <li className="techs__skillname">HTML</li>
                <li className="techs__skillname">CSS</li>
                <li className="techs__skillname">JS</li>
                <li className="techs__skillname">React</li>
                <li className="techs__skillname">Git</li>
                <li className="techs__skillname">Express.js</li>
                <li className="techs__skillname">mongoDB</li>    
            </ul>
        </section>
    )
};

export default Techs;