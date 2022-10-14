export default class Card {
    constructor(data, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._popupViewPhoto = document.querySelector('.popup_view_photo');
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');
        this._containerViewPhotoTitle = document.querySelector('.container-view-photo__title');
        this._element = this._getTemplate();
        this._cardDelete = this._element.querySelector('.card__delete');
        this._cardLike = this._element.querySelector('.card__like');
        this._cardPhoto = this._element.querySelector('.card__photo');
        this._cardTitle = this._element.querySelector('.card__title');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('#card')
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }

    _addEventListeners = () => {
        this._cardDelete.
            addEventListener('click', this._deleteTask);
        this._cardLike.
            addEventListener('click', this._likeTask);
        this._cardPhoto.
            addEventListener('click',() =>(this._handleCardClick(this._popupViewPhoto, this._element)));
    }

    _deleteTask = (event) => {
        event.preventDefault();
        this._element.remove();
    }

    _likeTask = (event) => {
        event.target.classList.toggle("card__like_active");
    }

    generateCard() {
        this._cardTitle.textContent = this._name;
        this._cardPhoto.alt = this._name;
        this._cardPhoto.src = this._link;
        this._addEventListeners();
        return this._element;
    }
};
