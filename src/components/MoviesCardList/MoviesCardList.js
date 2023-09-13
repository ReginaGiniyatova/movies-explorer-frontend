import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import {
  TABLET_VIEW_WIDTH,
    MOBILE_VIEW_WIDTH,
    DESKTOP_VIEW_COUNT,
    MOBILE_VIEW_COUNT,
    TABLET_VIEW_COUNT,
    DESCTOP_FILMS_COUNT,
    OTHER_FILMS_COUNT
} from "../../utils/Constants";

function MoviesCardList({
  isSavedMovies,
  movies,
  isLoading,
  onLike,
  likedMovies,
  searchQuery,
  onDislike
}) {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [isEmptyResults, setEmptyResults] = useState(false);
  const [isMoreButtonVisible, setMoreButtonVisible] = useState(!isSavedMovies);

  useEffect(() => {
    if (movies.length === 0 && searchQuery.length > 0) setEmptyResults(true);
    else setEmptyResults(false);

    setRenderedMovies(!isSavedMovies ? movies.slice(0, calculateVisibleCount()) : movies);
  }, [movies]);

  useEffect(() => {
    setMoreButtonVisible(!isSavedMovies ? renderedMovies.length < movies.length : false);
  }, [renderedMovies]);

  let onMoreButtonClick = () => {
    setRenderedMovies(movies.slice(0, renderedMovies.length + getMoviesCount()));
  };

  function calculateVisibleCount() {
    const width = window.innerWidth;
    
    if (width > TABLET_VIEW_WIDTH) return DESKTOP_VIEW_COUNT;
    if (width <= TABLET_VIEW_WIDTH && width >= MOBILE_VIEW_WIDTH) return TABLET_VIEW_COUNT;

    return MOBILE_VIEW_COUNT;
  }

  function getMoviesCount() {
    const width = window.innerWidth;

    if (width > TABLET_VIEW_WIDTH) return DESCTOP_FILMS_COUNT;
    return OTHER_FILMS_COUNT;
  }

  return (
    <section className="movies-list">
      {isEmptyResults && (
        <h2 className="movies-list__empty-result-text movies-list__empty-result-text_visible">
          Ничего не найдено
        </h2>
      )}
      {isLoading && <Preloader />}
      <ul className="movies-list__grid">
        {renderedMovies.map((card, id) => (
          <MoviesCard
            movie={card}
            key={card.id}
            isSavedMovies={isSavedMovies}
            onLike={onLike}
            onDislike={onDislike}
            isLiked={
              isSavedMovies ? true : likedMovies.some((id) => card.id === id)
            }
          />
        ))}
      </ul>
      <button
        className={`movies__more-btn ${
          !isMoreButtonVisible && "movies__more-btn_hidden"
        }`}
        type="button"
        onClick={onMoreButtonClick}
      >
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
