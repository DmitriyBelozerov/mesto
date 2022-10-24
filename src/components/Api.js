export default class Api {
    constructor(config) {
        this._urlProfile = config.urlProfile;
        this._urlSaveProfile = config.urlSaveProfile
        this._urlCards = config.urlCards;
        this._token = config.token;
    }




    getProfile() {
        return fetch(this._urlProfile, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
            .catch(err => {
                Promise.reject(err)
            })
    }


    getCards() {
        return fetch(this._urlCards, {
            headers: {
                authorization: this._token
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
            .catch(err => {
                Promise.reject(err)
            })
    }

    saveProfile(newName, newAbout) {
        return fetch(this._urlSaveProfile, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newName,
                link: newAbout
            }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
            .catch(err => {
                Promise.reject(err)
            })
    }

    createCard(name, link) {
        return fetch(this._urlCards, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, link }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
            .catch(err => {
                Promise.reject(err)
            })
    }

    deleteCard(id) {
        return fetch(`${this._urlCards}/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, link }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            })
            .catch(err => {
                Promise.reject(err)
            })
    }




}