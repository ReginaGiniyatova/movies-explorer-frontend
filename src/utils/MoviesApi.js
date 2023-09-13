class MoviesApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) return res.json();
        else return Promise.reject(`Error: ${res.status}`);
      }
    
      _request(url, options) {
        return fetch(`${this._baseUrl}${url}`, options).then(this._checkResponse);
      }


    getMovies() {
        return this._request('/beatfilm-movies', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
    }

}

export const apiMovies = new MoviesApi('https://api.nomoreparties.co');

