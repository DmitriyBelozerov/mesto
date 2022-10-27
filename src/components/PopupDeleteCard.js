import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor({ popupSelector, submitForm }) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._buttonSubmit = this._popup.querySelector('.form__submit');
        this._form = this._popup.querySelector('.form__sending');
    }

    async _deleteCard(event) {
        event.preventDefault();
        this._buttonSubmit.textContent = 'Сохранение...';
        await this._submitForm(this._id);
        
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit',  this._deleteCard.bind(this));
        

        ;
    }

    open(id) {
        super.open();
        this._buttonSubmit.textContent = 'Да';
        this._id = id;
    }

}
