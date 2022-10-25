export default class Card {
    constructor(data, selectorTemplate, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        // this._getUser = getUser;
        this._selectorTemplate = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardLike = this._element.querySelector('.card__like');
        this._cardPhoto = this._element.querySelector('.card__photo');
        this._cardTitle = this._element.querySelector('.card__title');
        this._cardLikeUsers = this._element.querySelector('.card__like-users');
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
            addEventListener('click', this._deleteTask);
        this._cardLike.
            addEventListener('click', this._likeTask);
        this._cardPhoto.
            addEventListener('click', () => { this._handleCardClick(this._name, this._link) });
    }

    _deleteTask = (event) => {
        event.preventDefault();
        this._element.remove();
    }

    _likeTask = (event) => {
        event.target.classList.toggle("card__like_active");
    }

    _viewLikes() {
        
        const quantityLikes = this._likes.length;
        if (quantityLikes > 0) {
            return this._cardLikeUsers.textContent = quantityLikes;
        }
    }

    _viewDelete () {

    }


    generateCard() {
        this._cardTitle.textContent = this._name;
        this._cardPhoto.alt = this._name;
        this._cardPhoto.src = this._link;
        this._viewLikes();
        // this._cardDelete.remove();
        this._setEventListeners();
        return this._element;
    }
};
