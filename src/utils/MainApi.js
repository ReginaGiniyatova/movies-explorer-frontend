class Api {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) return res.json();
        else 
          return res.json()
          .then((error) => {
            throw new Error(error.message);
          });
      }
    
      _request(url, options) {
        return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
      }

    register(data) {
        return this._request("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      login(data) {
        return this._request("/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }

      getContent(token) {
        return this._request("/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
      }

      getUserInfo() {
        return this._request("/users/me", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        });
      }

      updateUserInfo(data) {
        return this._request("/users/me", {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
          body: JSON.stringify(data),
        });
      }

      getSavedMovies() {
        return this._request("/movies", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
      }

      saveMovie(movie) {
        return this._request("/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify(movie),
        });
      }

      deleteMovie(id) {
        return this._request(`/movies/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
        });
      }
}

export const apiClient = new Api('https://api.movies-explorer.rs.nomoredomains.xyz');
