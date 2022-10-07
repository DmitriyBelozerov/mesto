// Свяжите класс Card c попапом. 
// Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. 
// Эта функция должна открывать попап с картинкой при клике на карточку.

//Если классы нужно связать друг с другом, делайте это передаваемой в конструктор функцией-колбэком.

export default class Card {
    constructor(data, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._openPopup = openPopup;
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
            addEventListener('click', this._openPreview);
    }

    _deleteTask = (event) => {
        event.preventDefault();
        this._element.remove();
    }

    _likeTask = (event) => {
        event.target.classList.toggle("card__like_active");
    }

    _openPreview = () => {
        this._containerViewPhotoName.src = this._cardPhoto.src;
        this._containerViewPhotoName.alt = this._cardTitle.textContent;
        this._containerViewPhotoTitle.textContent = this._cardTitle.textContent;
        this._openPopup(this._popupViewPhoto);
    }

    generateCard() {
        this._cardTitle.textContent = this._name;
        this._cardPhoto.alt = this._name;
        this._cardPhoto.src = this._link;
        this._addEventListeners();
        return this._element;
    }
};
