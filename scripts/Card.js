export class Card {
    constructor(data, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._openPopup = openPopup;
        this._popupViewPhoto = document.querySelector('.popup_view_photo');
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('#card')
            .content
            .querySelector('.card')
            .cloneNode(true);

        return cardElement;
    }
    _addEventListeners() {
        this._element.querySelector('.card__delete').
            addEventListener('click', this._deleteTask);

        this._element.querySelector('.card__like').
            addEventListener('click', this._likeTask);

        this._element.querySelector('.card__photo').
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
        const cardPhoto = this._element.querySelector('.card__photo');
        const cardTitle = this._element.querySelector('.card__title');
        const containerViewPhotoPhoto = document.querySelector('.container-view-photo__photo');
        const containerViewPhotoTitle = document.querySelector('.container-view-photo__title');
        containerViewPhotoPhoto.src = cardPhoto.src;
        containerViewPhotoPhoto.alt = cardTitle.textContent;
        containerViewPhotoTitle.textContent = cardTitle.textContent;
        this._openPopup(this._popupViewPhoto);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__photo').src = this._link;
        this._addEventListeners();
        return this._element;
    }
};
