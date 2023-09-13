import { useState, useEffect } from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { SHORT_FILM_DURATION } from "../../utils/Constants";

function SavedMovies({ loggedIn, movies, onDislike }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(movies);
  const [error, setError] = useState("");

  function handleSearchQuery(query) {
    if (query === searchQuery) return;
    setSearchQuery(query);
  }

  function resetErrors() {
    setError("");
  }

  function filteredMovies(searchQuery) {
    if (searchQuery.length > 0) {
      setSearchedMovies(
        movies.filter((movie) =>
          !isShort
            ? movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
            : (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
                movie.nameEN
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())) &&
              movie.duration <= SHORT_FILM_DURATION
        )
      );
    } else {
      setSearchedMovies(
        isShort
          ? movies.filter((movie) => movie.duration <= SHORT_FILM_DURATION)
          : movies
      );
    }
  }

  useEffect(() => {
    filteredMovies(searchQuery);
  }, [searchQuery, movies, isShort]);

  function handleFilterChecked(checked) {
    setIsShort(checked);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearch={handleSearchQuery}
        onFilterChecked={handleFilterChecked}
        onError={setError}
        resetErrors={resetErrors}
      />
      <section className="saved-movies">
        <div className="saved-movies__divider" />
        {error && <p className="saved-movies__error-message">{error}</p>}
        {!error && (
          <MoviesCardList
            isSavedMovies={true}
            movies={searchedMovies}
            searchQuery={searchQuery}
            onDislike={onDislike}
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
