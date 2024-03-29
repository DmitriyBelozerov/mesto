export default class Api {
    constructor(config) {
        this._header = config.headers;
        this._baseUrl = config.baseUrl;
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Ошибка при загрузке данных с сервера')
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }


    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    saveProfile(newName, newAbout) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._header,
            body: JSON.stringify({
                name: `${newName}`,
                about: `${newAbout}`
            }),
        })
            .then(this._getJsonOrError)
    }

    createNewCard(newName, newLink) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._header,
            body: JSON.stringify({
                name: `${newName}`,
                link: `${newLink}`
            }),
        })
            .then(this._getJsonOrError)
    }



    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    markLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    submitAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._header,
            body: JSON.stringify({
                avatar: `${link}`
            }),
        })
            .then(this._getJsonOrError)
    }

}