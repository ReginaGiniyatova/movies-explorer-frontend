import './MoviesCard.css'

function MoviesCard({ card, isSavedMovies }) {
    return (
        <div className='movies-card'>
            <img className='movies-card__image' src={card.link}></img>

            <div className='movies-card__container'>
                <p className='movies-card__title'>{card.name}</p>
                <div className={isSavedMovies ? 'movies-card__delete' : 'movies-card__like'}/>
            </div>

            <p className='movies-card__duration'>{card.duration}</p>
        </div>
    )
}

export default MoviesCard;