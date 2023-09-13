import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { apiMovies } from "../../utils/MoviesApi";
import {
  REQUEST_FAILED_MESSAGE,
  SHORT_FILM_DURATION
} from "../../utils/Constants";


function Movies({ onLike, onDislike, likedMovies, loggedIn, errorMessage }) {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("query") || ""
  );
  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem("isShort")) || false
  );
  const [searchedMovies, setSearchedMovies] = useState(
    JSON.parse(localStorage.getItem("smovies")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(errorMessage || "");
  const [rawMovies, setRawMovies] = useState(JSON.parse(localStorage.getItem("rawMovies")) || []);

  function handleSearchQuery(query) {
    if (query === searchQuery) return;
    setSearchQuery(query);
    localStorage.setItem("query", query);
  }

  useEffect(() => {
    const hasRawMovies = localStorage.getItem("rawMovies");

    if (!hasRawMovies && searchQuery.length > 0) {
      setIsLoading(true);

      apiMovies.getMovies()
        .then(movies => {
          setIsLoading(false);
          setRawMovies(movies);
          localStorage.setItem("rawMovies", JSON.stringify(movies));
          filterMovies(movies);
        })
        .catch(error => {
          setError(REQUEST_FAILED_MESSAGE);
          console.error(error);

          setIsLoading(false);
        })
    } else {
      filterMovies(rawMovies);
      setIsLoading(false);
    }
}, [searchQuery, isShort]);

  function filterMovies(movies) {
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
    localStorage.setItem("smovies", JSON.stringify(searchedMovies));
  }

  function handleFilterChecked(checked) {
    localStorage.setItem("isShort", checked);
    setIsShort(checked);
  }

  function resetErrors() {
    setError("");
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        lastQuery={searchQuery}
        onSearch={handleSearchQuery}
        onFilterChecked={handleFilterChecked}
        isChecked={isShort}
        onError={setError}
        resetErrors={resetErrors}
      />
      <section className="movies">
        <div className="movies__divider" />
        {error && (
          <p className="movies__error-message">{error}</p>
        )}
       {!error && <MoviesCardList
          isSavedMovies={false}
          movies={searchedMovies}
          isLoading={isLoading}
          onLike={onLike}
          likedMovies={likedMovies}
          searchQuery={searchQuery}
          onDislike={onDislike}
        /> }
      </section>
      <Footer />
    </>
  );
}

export default Movies;
