import { useState, useEffect } from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ loggedIn, movies, onDislike }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState(movies);

  function handleSearchQuery(query) {
    if (query === searchQuery) return;
    setIsLoading(true);
    setSearchQuery(query);
  }

  function filteredMovies(searchQuery) {
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
  }

  useEffect(() => {
    if (searchQuery.length > 0 ) filteredMovies(searchQuery);
    else setSearchedMovies(movies);
  }, [movies])

  useEffect(() => {
    if (searchQuery.length > 0) {
      filteredMovies(searchQuery);
    }
    setIsLoading(false);
  }, [searchQuery, isShort]);

  function handleFilterChecked(checked) {
    setIsLoading(true);
    setIsShort(checked);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        onSearch={handleSearchQuery}
        onFilterChecked={handleFilterChecked}
      />
      <section className="saved-movies">
        <div className="saved-movies__divider" />
        <MoviesCardList
          isSavedMovies={true}
          isLoading={isLoading}
          movies={searchedMovies}
          searchQuery={searchQuery}
          onDislike={onDislike}
        />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
