export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close');
        this.keyNmbrEsc = 27;
        this._handleEscClose = this._handleEscClose.bind(this);
        this._loadingText = 'Сохранение...';
    }

    _handleEscClose(evt) {
        if (evt.keyCode === this.keyNmbrEsc) {
            this.close();
        }
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close.bind(this));
        this._popup.addEventListener("mousedown", (event) => {
            const popup = event.target.contains(this._popup);
            if (popup) {
                this.close();
            }
        });
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._buttonSubmit.textContent = this._loadingText;
        } else {
            this._buttonSubmit.textContent = this._textBtnSubmit;
        }
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
}

