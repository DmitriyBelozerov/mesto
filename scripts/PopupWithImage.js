import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, element) {
        super(popupSelector);
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');
        this._cardPhoto = element.querySelector('.card__photo');
        this._cardTitle = element.querySelector('.card__title');
        this._containerViewPhotoTitle = document.querySelector('.container-view-photo__title');




    }

    open() {
        this._containerViewPhotoName.src = this._cardPhoto.src;
        this._containerViewPhotoName.alt = this._cardTitle.textContent;
        this._containerViewPhotoTitle.textContent = this._cardTitle.textContent;
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
        this.setEventListeners();

    }
}



// Этот класс должен перезаписывать родительский метод open.
// В методе open класса PopupWithImage нужно вставлять в попап
// картинку с src изображения и подписью к картинке.