import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, element) {
        super(popupSelector);
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');
        this._cardPhoto = element.querySelector('.card__photo');
        this._cardTitle = element.querySelector('.card__title');
        this._containerViewPhotoTitle = document.querySelector('.container-view-photo__title');
        this._buttonClose = this._popupSelector.querySelector('.container-view-photo__button-close');



    }

    open() {
        super.open();
        this._containerViewPhotoName.src = this._cardPhoto.src;
        this._containerViewPhotoName.alt = this._cardTitle.textContent;
        this._containerViewPhotoTitle.textContent = this._cardTitle.textContent;
    }
}
