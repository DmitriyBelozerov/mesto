export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._buttonClose = this._popupSelector.querySelector('.form__close');
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');
        this.keyNmbrEsc = 27;
    }

    _handleEscClose(evt) {
        if (evt.keyCode === this.keyNmbrEsc) {
            this.close();
        };
        
    }

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
    }

    close() {
        this._popupSelector.classList.remove("popup_opened");
        document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) });
        this.setEventListeners.remove();
    }
}

