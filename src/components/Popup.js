export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.form__close');
        this._containerViewPhotoName = document.querySelector('.container-view-photo__photo');
        this.keyNmbrEsc = 27;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evt) {
        if (evt.keyCode === this.keyNmbrEsc) {
            this.close();
        }
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        document.addEventListener("mousedown", (event) => {
            const popup = event.target.contains(this._popup);
            if (popup) {
                this.close();
            }
        });
    }

    open() {
        this._popup.classList.add("popup_opened");
        this._buttonSubmit.textContent = 'Сохранить';
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
}

