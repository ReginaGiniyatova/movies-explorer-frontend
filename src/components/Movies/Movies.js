import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({ movies, onLike, onDislike, likedMovies, loggedIn, errorMessage }) {
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

  function handleSearchQuery(query) {
    if (query === searchQuery) return;
    setIsLoading(true);
    setSearchQuery(query);
    localStorage.setItem("query", query);
  }

  useEffect(() => {
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
              movie.duration <= 40
        )
      );
      localStorage.setItem("smovies", JSON.stringify(searchedMovies));
    }
    setIsLoading(false);
  }, [searchQuery, movies, isShort]);

  function handleFilterChecked(checked) {
    setIsLoading(true);
    localStorage.setItem("isShort", checked);
    setIsShort(checked);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        lastQuery={searchQuery}
        onSearch={handleSearchQuery}
        onFilterChecked={handleFilterChecked}
        isChecked={isShort}

      />
      <section className="movies">
        <div className="movies__divider" />
        {errorMessage && (
          <p className="movies__error-message">{errorMessage}</p>
        )}
       {!errorMessage && <MoviesCardList
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
