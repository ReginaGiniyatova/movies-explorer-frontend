class Api {
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

      getUser(token) {
        return this._request("/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
      }

}

export const apiClient = new Api('https://api.movies-explorer.rs.nomoredomains.xyz');
