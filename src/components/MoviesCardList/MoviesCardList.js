import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

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
    const TABLET_VIEW_WIDTH = 768;
    const MOBILE_VIEW_WIDTH = 535;

    if (width > TABLET_VIEW_WIDTH) return 16;
    if (width <= TABLET_VIEW_WIDTH && width >= MOBILE_VIEW_WIDTH) return 8;

    return 5;
  }

  function getMoviesCount() {
    const width = window.innerWidth;
    const TABLET_VIEW_WIDTH = 768;

    if (width > TABLET_VIEW_WIDTH) return 4;
    return 2;
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
            key={id}
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
