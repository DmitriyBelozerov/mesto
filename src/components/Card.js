export default class Card {
    constructor(selectorTemplate, handleCardClick, userId, handleCardDelete, markLike, deleteLike) {
        this._selectorTemplate = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._markLike = markLike;
        this._deleteLike = deleteLike;
        this._handleCardDelete = handleCardDelete;
        this._element = this._getTemplate();
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardLike = this._element.querySelector('.card__like');
        this._cardPhoto = this._element.querySelector('.card__photo');
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardLikeUsers = this._element.querySelector('.card__like-users');
        this._userId = userId;
    }

    setData(data) {
        this._data = data;
        this._name = this._data.name;
        this._link = this._data.link;
        this._likes = this._data.likes;
        this._ownerId = this._data.owner._id;
        this._id = this._data._id;

    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._selectorTemplate)
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    _setEventListeners = () => {
        this._cardDelete.
            addEventListener('click', this._deleteTask.bind(this));
        this._cardLike.
            addEventListener('click', this._likeTask.bind(this));
        this._cardPhoto.
            addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
    }

    async _deleteTask(event) {
        try {
            event.preventDefault();
            await this._handleCardDelete(this._id, this._element);
        }
        catch (error) {
            console.log(`'Ошибочка при удалении: ' ${error}`);
        }
    }

    _likeTask = (event) => {
        if (!(this._cardLike.classList.contains('card__like_active'))) {
            this._markLike(this._id)
                .then((data) => {
                    event.target.classList.add("card__like_active");
                    this._viewLikes(data.likes);
                })
                .catch(err => console.log(err))
        } else {
            this._deleteLike(this._id)
                .then((data) => {
                    event.target.classList.remove("card__like_active");
                    this._viewLikes(data.likes);
                })
                .catch(err => console.log(err))
        }
    }

    _viewLikes(likes) {
        const quantityLikes = likes.length;
        this._cardLikeUsers.textContent = quantityLikes;
        if (quantityLikes == 0) {
            this._cardLikeUsers.textContent = '';
        }
    }

    _viewMyActiveLike() {
        if (this._likes.find(item => item._id === this._userId)) {
            this._cardLike.classList.add('card__like_active');
        }
    }

    _viewDelete() {
        if (!(this._ownerId === this._userId)) {
            this._cardDelete.remove();
        }
    }

    generateCard() {
        this._cardTitle.textContent = this._name;
        this._cardPhoto.alt = this._name;
        this._cardPhoto.src = this._link;
        this._viewLikes(this._likes);
        this._viewMyActiveLike()
        this._viewDelete();
        this._setEventListeners();
        return this._element;
    }
};
