import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._buttonClose = this._popup.querySelector('.container-view-photo__button-close');
    }
}

//Михаил, по твоим рекомендациям сделал функцию handleCardClick в index.js. Поэтому необходимость перезаписывать метод open() пропала. 