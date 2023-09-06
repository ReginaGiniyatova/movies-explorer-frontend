import './MoviesCard.css'

function MoviesCard({ movie, isSavedMovies, onLike, isLiked, onDislike }) {
    function formatDuration(duration) {
        const hours = duration / 60;
        const minutes = duration % 60;

        return `${Number.parseInt(hours)}ч ${minutes}м`;
    }

function openTrailerLink() {
    window.open(movie.trailerLink, '_blank');
}    

const handleLike = (e) => {
    onLike(movie);
};

const handleDislike = (e) => {
    onDislike(movie);
}

    return (
        <div className='movies-card'>
            <img className='movies-card__image' 
            onClick={openTrailerLink} 
            src={movie.image.url.includes('http') ? movie.image.url : `https://api.nomoreparties.co${movie.image.url}`} 
            alt="карточка фильма"></img>

            <div className='movies-card__container'>
                <p className='movies-card__title'>{movie.nameRU}</p>
                <div 
                onClick={!isLiked && !isSavedMovies ? handleLike : handleDislike}
                className={isSavedMovies 
                    ? 'movies-card__delete' 
                    : `movies-card__like ${isLiked || "movies-card__like_inactive"}`
                    }/>
            </div>

            <p className='movies-card__duration'>{formatDuration(movie.duration)}</p>
        </div>
    )
}

export default MoviesCard;