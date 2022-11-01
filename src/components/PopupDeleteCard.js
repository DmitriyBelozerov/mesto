import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonSubmit = this._popup.querySelector('.form__submit');
        this._form = this._popup.querySelector('.form__sending');
        this._deleteCard = this._deleteCard.bind(this);
        this._loadingText = 'Удаление...';
    }

    _deleteCard(event) {
        event.preventDefault();
        this.renderLoading(true);
        this._submitForm(this._id);
    }

     open(id) {
        super.open();
        this._buttonSubmit.textContent = 'Да';
        this._id = id;
        document.addEventListener('submit', this._deleteCard);

    }

    close () {
        super.close();
        document.removeEventListener('submit', this._deleteCard);
    }

    
}
