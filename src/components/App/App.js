import "./App.css";
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import { apiClient } from "../../utils/MainApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext";



function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  function handleRegister(user) {
    apiClient.register(user)
      .then(console.log)
      .catch(console.log)
  }

  function handleLogin(user) {
    apiClient.login(user)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        checkToken();
      })
      .catch(console.log)
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      apiClient.getUser(jwt)
      .then((user) => {
        setCurrentUser(user);
        navigate("/movies", { replace: true });
      })
      .catch(console.error);
    }
  }
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login onSubmit={handleLogin} />} />
        <Route path="/signup" element={<Register onSubmit={handleRegister} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
