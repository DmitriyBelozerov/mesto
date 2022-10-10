export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._buttonClose = this._popupSelector.querySelector('.form__close');
        
        this.keyNmbrEsc = 27;
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');

    }

    _handleEscClose(evt) {
        if (evt.keyCode === this.keyNmbrEsc) {
            const popupView = document.querySelector('.popup_opened');
            this.close();
        };
    }
 
    // слушатель иконки закрытие попАп и клик затемненной области вокруг формы
    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        document.addEventListener("mousedown", (event) => {
            const popup = event.target.classList.contains('popup');
            if (popup) {
                this.close();
            }
        });
    }

    open() {
        this._popupSelector.classList.add("popup_opened");
        document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) });
        this.setEventListeners();
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) });
    }
}

