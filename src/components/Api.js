export default class Api {
    constructor(config) {
        this._urlProfile = config.urlProfile;
        this._urlSaveProfile = config.urlSaveProfile
        this._urlCards = config.urlCards;
        this._token = config.token;
    }

    _getJsonOrError(res) {

        if (res.ok) {
            return res.json();
        }
        throw new Error('Ошибка при загрузке данных с сервера')


    }


    getProfile() {
        return fetch(this._urlProfile, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._getJsonOrError)
    }


    getCards() {
        return fetch(this._urlCards, {
            headers: {
                authorization: this._token
            }
        })
            .then(this._getJsonOrError)
    }

    saveProfile(newName, newAbout) {
        return fetch(this._urlSaveProfile, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${newName}`,
                about: `${newAbout}`
            }),
        })
            .then(this._getJsonOrError)
    }

    createNewCard(newName, newLink) {
        return fetch(this._urlCards, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${newName}`,
                link: `${newLink}`
            }),
        })
            .then(this._getJsonOrError)
    }


    
    deleteCard(id) {
        return fetch(`${this._urlCards}/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        })
            .then(this._getJsonOrError)
    }

    markLike(id) {
        return fetch(`${this._urlCards}/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        })
            .then(this._getJsonOrError)
    }

    deleteLike(id) {
        return fetch(`${this._urlCards}/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
        })
            .then(this._getJsonOrError)
    }

    submitAvatar(link) {
        return fetch(`${this._urlSaveProfile}/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: `${link}`
            }),
        })
            .then(this._getJsonOrError)
    }


}