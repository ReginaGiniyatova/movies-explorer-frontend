import "./App.css";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { apiClient } from "../../utils/MainApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { apiMovies } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (loggedIn) {
      resetErrors();
      Promise.all([
        apiClient.getUserInfo(),
        apiMovies.getMovies(),
        apiClient.getSavedMovies(),
      ])
        .then(([user, movies, savedMovies]) => {
          setCurrentUser(user);
          setMovies(movies);
          setSavedMovies(transformSavedMovies(savedMovies));
          setLikedMovies(savedMovies.map((movie) => movie.movieId));
        })
        .catch(error => {
          setErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
          console.error(error);
        });
    }
  }, [loggedIn]);

  function handleRegister(user) {
    apiClient
      .register(user)
      .then((data) =>
        handleLogin({
          email: user.email,
          password: user.password,
        })
      )
      .catch(error => {
        setErrorMessage(error.message);
      });
  }

  function handleLogin(user) {
    apiClient
      .login(user)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }

  function resetErrors() {
    setErrorMessage("");
  }

  function checkToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      apiClient
        .getContent(jwt)
        .then((user) => {
          setLoggedIn(true);
          navigate(path, { replace: true });
        })
        .catch(console.error);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  function editProfileInfo(userInfo) {
    apiClient
      .updateUserInfo(userInfo)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(console.error);
  }

  function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("query");
    localStorage.removeItem("smovies");
    localStorage.removeItem("isShort");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
  }

  function handleLike(movie) {
    const isHasMovieLike = likedMovies.some((movieId) => movieId === movie.id);
    if (!isHasMovieLike) {
      setLikedMovies([movie.id, ...likedMovies]);

      apiClient
        .saveMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
        })
        .then((movie) =>
          setSavedMovies([transformMovie(movie), ...savedMovies])
        )
        .catch(console.error);
    }
  }

  function handleDislike(movie) {
    const savedMovie = savedMovies.find(s => s.id === movie.id);

    apiClient
    .deleteMovie(savedMovie._id)
    .then((movie) => {
      setSavedMovies(savedMovies.filter(m => m.id !== movie.movieId))
      setLikedMovies(likedMovies.filter(id => id !== movie.movieId));
    })
    .catch(console.error);
  }

  function transformSavedMovies(movies) {
    return movies.map(transformMovie);
  }

  function transformMovie(movie) {
    return {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: {
        url: movie.image,
        formats: {
          thumbnail: {
            url: movie.thumbnail,
          },
        },
      },
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      id: movie.movieId,
      _id: movie._id,
    };
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route 
          path="/signin" 
          element={
            loggedIn
            ? <Navigate to="/" />
            : <Login onSubmit={handleLogin} errorMessage={errorMessage} resetErrors={resetErrors} />} />
          <Route
            path="/signup"
            element={
              loggedIn
              ? <Navigate to="/" />
              : <Register onSubmit={handleRegister} errorMessage={errorMessage} resetErrors={resetErrors} />}
          />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                movies={movies}
                element={Movies}
                onLike={handleLike}
                likedMovies={likedMovies}
                onDislike={handleDislike}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                element={SavedMovies}
                movies={savedMovies}
                onDislike={handleDislike}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onEdit={editProfileInfo}
                onLogout={logout}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
